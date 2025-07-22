<?php

namespace App\Console\Commands;

use App\Models\Order;
use App\Services\TelegramService;
use Exception;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Console\Command\Command as CommandAlias;

class CheckStatus extends Command
{
    protected $signature = 'check:status';

    protected $description = 'Check status for server';

    public function __construct(
    ) {
        parent::__construct();
    }

    public function handle(): int
    {
        $service = new TelegramService();
        $isWork = "Сайт не работает";
        try {
            $response = Http::get(env('SITE_URL'));
            if ($response->status() === 200) {
                $isWork = "Работает";
            }
        } catch (Exception $e) {
            Log::error('exception request', [$e]);
        }
        $message = [
            now("Europe/Moscow")->format('d.m.Y H:i'),
            "Сайт: $isWork",
        ];
        $service->sendMessage(implode("\r\n", $message));
        return CommandAlias::SUCCESS;
    }
}
