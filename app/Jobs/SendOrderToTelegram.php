<?php

namespace App\Jobs;

use App\Models\Order;
use App\Services\TelegramService;
use Carbon\Carbon;
use Exception;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\View;

class SendOrderToTelegram implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(private readonly Order $order)
    {
        $this->queue = 'default';
    }

    public function handle()
    {
        $service = new TelegramService();
        try {
            $message = [
                Carbon::now('Europe/Moscow')->format('d.m.Y H:i'),
                "Новый заказ от клиента: {$this->order->full_name}",
                "Телефон: " . ($this->order->phone ?? 'Не указан'),
                "Почта: " . ($this->order->email ?? 'Не указан'),
                "Комментарий: " . ($this->order->comment ?? 'Не указан') . "\r\n",
                "Наименование товара: " .data_get($this->order, 'entity.name'),
                "Детали: " . $this->order->getInfoOrder(),
            ];
            $service->sendMessage(implode("\r\n", $message));
        } catch (Exception $e) {
            Log::error("Error sending telegram order: {$e->getMessage()}", [$e]);
        }
    }
}
