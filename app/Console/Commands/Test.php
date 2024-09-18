<?php

namespace App\Console\Commands;


use Illuminate\Console\Command;
use Symfony\Component\Console\Command\Command as CommandAlias;

class Test extends Command
{
    protected $signature = 'test';

    protected $description = 'Test command';

    public function __construct(
    ) {
        parent::__construct();
    }

    public function handle(): int
    {
        dispatch(new \App\Jobs\Test());

        return CommandAlias::SUCCESS;
    }
}
