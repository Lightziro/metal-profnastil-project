<?php

namespace App\Services\Question;

use App\Http\DataTransferObject\NewQuestionData;
use App\Jobs\SendQuestionToEmail;
use App\Models\Question;
use App\Models\User;
use App\Notifications\NewQuestion;
use App\Repository\QuestionRepository;

class NewQuestionService
{
    public function __construct(
        readonly private QuestionRepository $questionRepository,
    ) {
    }

    public function create(NewQuestionData $questionData)
    {
        $question = new Question();
        $question->setName($questionData->getName());
        $question->setPhone($questionData->getPhone());
        $question->setEmail($questionData->getEmail());
        $question->setComment($questionData->getComment());
        $question = $this->questionRepository->save($question);

        $this->sendQuestionToEmail($question);
        $this->sendNotifyUsers($question);

        return $question;
    }

    public function sendQuestionToEmail(Question $question)
    {
        SendQuestionToEmail::dispatch($question);
    }

    public function sendNotifyUsers(Question $question)
    {
        $listStaff = config('contacts.send_question_users', []);
        foreach ($listStaff as $staffEmail) {
            /** @var User $user */
            $user = User::query()->firstWhere('email', $staffEmail);
            if (!$user) {
                continue;
            }
            $user->notify(new NewQuestion($question->name));
        }
    }
}
