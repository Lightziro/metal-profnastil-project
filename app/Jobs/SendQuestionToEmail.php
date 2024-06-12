<?php

namespace App\Jobs;

use App\Models\Question;
use App\Services\MailService;
use Exception;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\View;
use Throwable;

class SendQuestionToEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    private readonly MailService $mailService;
    public function __construct(private readonly Question $question)
    {
        $this->mailService = new MailService();
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
            $listStaff = config('contacts.send_question_email', []);
            $body = View::make('questionTemplateEmail')->render();
            foreach ($listStaff as $staffEmail) {
                $this->mailService->sendMail($staffEmail, "Новый вопрос от '{$this->question->name}'", $body);
                Log::debug("Question - {$this->question->id}. Email send success - $staffEmail");
            }
        } catch (Exception $e) {
            Log::error("Error sending email: {$e->getMessage()}", [$e]);
        }
    }
}
