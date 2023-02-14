# Use a versioned PHP base image
FROM php:8.2-fpm-alpine

# Install required dependencies
RUN apk update && apk add --no-cache \
    build-base \
    libzip-dev \
    zip \
    zlib-dev \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev

# Install required PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd pdo_mysql zip

# Install composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Copy Laravel files
COPY ./docker/ /var/www/html

# Install Laravel dependencies
RUN composer install --no-interaction --no-dev --prefer-dist

# Set working directory
WORKDIR /var/www/html

# Set permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
RUN chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Expose the port
#EXPOSE 9000

# Start the server
CMD ["php-fpm"]