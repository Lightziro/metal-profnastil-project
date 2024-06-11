<?php

namespace App\Services;

use Illuminate\Support\Facades\Log;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

class MailService
{
    protected $mail;

    public function __construct()
    {
        $this->mail = new PHPMailer(true);
        $this->configureMailer();
    }

    protected function configureMailer()
    {
        $this->mail->isSMTP();
        $this->mail->SMTPDebug = SMTP::DEBUG_CONNECTION;
        $this->mail->Host = 'smtp.yandex.ru';
        $this->mail->SMTPAuth = true;
        $this->mail->Username = 'ithub-company@yandex.ru';
        $this->mail->Password = 'juujwvnxogrxhgrk';
        $this->mail->SMTPSecure = 'ssl';
        $this->mail->Port = 465;
        $this->mail->SMTPOptions = [
            'ssl' => [
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            ]
        ];
    }

    public function sendMail($to, $subject, $body)
    {
        try {
            $this->mail->setFrom('ithub-company@yandex.ru', 'Your name');
            $this->mail->addAddress($to);
            $this->mail->isHTML(true);
            $this->mail->Subject = $subject;
            $this->mail->Body    = $body;

            $this->mail->send();
            Log::error('success', []);
            return true;
        } catch (Exception $e) {
            Log::error($e->getMessage(), [$e]);
            return false;
        }
    }
}
