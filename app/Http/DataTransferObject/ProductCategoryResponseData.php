<?php

namespace App\Http\DataTransferObject;

final class ProductCategoryResponseData
{
    public function __construct(
        private int $id,
        private string $name,
        private int $count,
        private string|null $urlSlug,
        private string|null $slug
    ) {
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getCount(): ?int
    {
        return $this->count;
    }

    public function getUrlSlug(): ?string
    {
        return $this->urlSlug;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }
}
