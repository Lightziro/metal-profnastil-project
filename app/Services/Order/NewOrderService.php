<?php
namespace App\Services\Order;
use App\Http\Request\OrderRequest;
use App\Http\Request\QuestionRequest;
use App\Models\Question;
use App\Repository\OrderRepository;
use App\Repository\QuestionRepository;
use App\Services\MailService;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\View;

class NewOrderService
{
    public function __construct(
        readonly private OrderRepository $orderRepository,
        readonly private MailService $mailService
    ) {
    }

    public function execute(OrderRequest $request)
    {
        $order = $this->orderRepository->newOrder($this->prepareToModel($request));
        return $order;
    }

    private function prepareToModel(OrderRequest $request): array
    {
        return [
            'entity_type' => $request->entityType,
            'entity_id' => $request->entityId,
            'full_name' => $request->fullName,
            'phone' => $request->phone,
            'email' => $request->email,
            'comment' => $request->comment,
        ];
    }

    public function sendQuestionToEmail(Question $question)
    {
        $listStaff = config('contacts.send_question_email', []);
        $messageSubject = "Новый вопрос от '{$question->name}'";

        foreach ($listStaff as $staffEmail) {
            try {
                $body = View::make('questionTemplateEmail')->render();
                $this->mailService->sendMail($staffEmail, $messageSubject, $body);
            } catch (\Exception $e) {
                Log::error($e->getMessage(), [$e]);
            }
        }
    }
}
