<?php

namespace App\Jobs;

use App\Models\Question;
use App\Services\MailService;
use App\Services\TelegramService;
use Exception;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\View;

class SendQuestionToTelegram implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(private readonly Question $question)
    {
        $this->queue = 'default';
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        try {
            $service = new TelegramService();
            $message = [
                "Новый вопрос от клиента: {$this->question->name}",
                "Телефон: " . ($this->question->phone ?? "Не указан"),
                "Почта: " . ($this->question->email ?? "Не указан"),
                "Комментарий: " . ($this->question->comment ?? "Не указан"),
            ];
            $service->sendMessage(implode("\r\n", $message));
        } catch (Exception $e) {
            Log::error("Error sending telegram: {$e->getMessage()}", [$e]);
        }
    }
}
