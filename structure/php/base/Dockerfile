FROM php:8.1.0-fpm

## Arguments defined in docker-compose.yml
ARG user=sammy
ARG uid=1000
RUN apt-get clean
## Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpq-dev \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    libfann-dev\
    nodejs \
#    supervisor \
    npm

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN pecl install xdebug \
    && docker-php-ext-enable xdebug

RUN docker-php-ext-install pgsql pdo_pgsql pdo mbstring exif pcntl bcmath gd sockets

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN useradd -G www-data,root -u $uid -d /home/$user $user
RUN mkdir -p /home/$user/.composer && \
    chown -R $user:$user /home/$user

COPY php.ini /usr/local/etc/php/

#COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

WORKDIR /var/www

USER $user

#CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
