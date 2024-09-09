<?php

namespace App\Http\DataTransferObject;


final class NewQuestionData
{
    public function __construct(
        private string $name,
        private string|null $phone,
        private string|null $email,
        private string|null $comment,
    ) {
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }
}
