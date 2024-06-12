<?php

namespace App\Services;

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
        $this->mail->Host = env('MAIL_HOST');
        $this->mail->SMTPAuth = true;
        $this->mail->Username = env('MAIL_USERNAME');
        $this->mail->Password = env('MAIL_PASSWORD');
        $this->mail->SMTPSecure = env('MAIL_ENCRYPTION');
        $this->mail->Port = env('MAIL_PORT');
    }

    public function sendMail($to, $subject, $body): bool
    {
        $this->mail->setFrom(env('MAIL_USERNAME'), env('MAIL_FROM_NAME'));
        $this->mail->addAddress($to);
        $this->mail->isHTML(true);
        $this->mail->Subject = $subject;
        $this->mail->Body    = $body;

        return $this->mail->send();
    }
}
