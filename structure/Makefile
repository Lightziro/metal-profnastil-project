up:
	docker compose up -d
	docker compose exec app composer install

down:
	docker compose stop

cache:
	docker compose exec app php artisan cache:clear
	docker compose exec app php artisan config:clear

format:
	docker compose exec php-app vendor/bin/php-cs-fixer fix -v --using-cache=no --config=.php-cs-fixer.php
