<?php

namespace App\Services;

use GuzzleHttp\Client;

class TelegramService
{
    private readonly Client $client;
    public function __construct()
    {
        $this->client = new Client();
    }

    public function sendMessage(string $text, ?int $toId = null)
    {
        if (!$toId) {
            $toId = config('services.telegram.notification_to_id');
        }
        $url = config('services.telegram.url') . config('services.telegram.api_key') . '/sendMessage';
        $this->client->post($url, [
            'json' => [
                'chat_id' => $toId,
                'text' => $text,
            ],
        ]);
    }
}
