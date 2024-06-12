<?php

namespace App\Jobs;

use App\Models\Order;
use App\Services\MailService;
use Exception;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\View;

class SendOrderToEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    private readonly MailService $mailService;
    public function __construct(private readonly Order $order)
    {
        $this->mailService = new MailService();
        $this->queue = 'default';
    }

    public function handle()
    {
        try {
            $listStaff = config('contacts.send_to_email', []);
            $body = View::make('orderTemplateEmail', [
                'order' => $this->order,
            ])->render();

            foreach ($listStaff as $staffEmail) {
                $this->mailService->sendMail($staffEmail, "Новый заказ от '{$this->order->full_name}'", $body);
                Log::debug("Order - {$this->order->id}. Email send success - $staffEmail");
            }
        } catch (Exception $e) {
            Log::error("Error sending email: {$e->getMessage()}", [$e]);
        }
    }
}
