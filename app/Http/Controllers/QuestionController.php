<?php

namespace App\Http\Controllers;

use App\Library\Constant;
use App\Question;
use Illuminate\Http\Request;
use Mail;
use Carbon\Carbon;

class QuestionController extends Controller
{
    private $messageSubject = 'Новый вопрос от клиента';
    /** Добавление нового вопроса в БД и отсылает письмо на почту сотрудникам
     * @param Request $request
     */
    public function newQuestion(Request $request)
    {
        $question = new Question();
        $question->name = $request->fullName;
        $question->phone = $request->phone;
        $question->email = $request->email;
        $question->comment = $request->description ?? 'Отсутствует';
        $question->save();
        return $this->sendEmailFromStaff($request);
    }

    public function sendEmailFromStaff(Request $request)
    {
        $listStaff = Constant::staffSendQuestionEmail;
        $messageSubject = "{$this->messageSubject} '{$request->fullName}' тел. {$request->phone}";
        $data = [
            'nameClient' => $request->fullName,
            'phoneClient' => $request->phone ?? 'Не указан',
            'emailClient' => $request->email ?? 'Не указан',
            'dateQuestion' => Carbon::now(),
            'commentClient' => $request->description ?? 'Не указан',
        ];

        foreach ($listStaff as $staffEmail) {
            try {
                \Mail::send('questionTemplateEmail', $data, function ($message) use ($staffEmail, $messageSubject) {
                    $message->to($staffEmail)->subject($messageSubject);
                });
            } catch (\Exception $exceptione) {
                return $exceptione->getMessage();
            }
        }
        return $request;
    }
}
