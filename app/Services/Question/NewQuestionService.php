<?php
namespace App\Services\Question;
use App\Http\Request\QuestionRequest;
use App\Models\Question;
use App\Models\User;
use App\Notifications\NewQuestion;
use App\Repository\QuestionRepository;
use App\Services\MailService;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\View;

class NewQuestionService
{
    public function __construct(
        readonly private QuestionRepository $questionRepository,
        readonly private MailService $mailService
    ) {
    }

    public function execute(QuestionRequest $request)
    {
        $question = $this->questionRepository->newQuestion($request);
        $this->sendQuestionToEmail($question);
        $this->sendNotifyUsers($question);
        return $question;
    }

    public function sendQuestionToEmail(Question $question)
    {
        $listStaff = config('contacts.send_question_email', []);
        $messageSubject = "Новый вопрос от '{$question->name}'";

        foreach ($listStaff as $staffEmail) {
//            try {
//                $body = View::make('questionTemplateEmail')->render();
//                $this->mailService->sendMail($staffEmail, $messageSubject, $body);
//            } catch (\Exception $e) {
//                Log::error($e->getMessage(), [$e]);
//            }


        }
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
