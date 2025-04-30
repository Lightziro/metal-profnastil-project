<?php

namespace App\Http\DataTransferObject;

final class NewOrderData
{
    public function __construct(
        private string $entityType,
        private int $entityId,
        private string|null $fullName,
        private string|null $phone,
        private string|null $email,
        private string|null $comment,
        private array|null $additionalData = [],
    ) {
    }

    public function getEntityType(): string
    {
        return $this->entityType;
    }

    public function getEntityId(): int
    {
        return $this->entityId;
    }

    public function getFullName(): string
    {
        return $this->fullName;
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

    public function getAdditionalData(): ?array
    {
        return $this->additionalData;
    }
}
