FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
        libzip-dev \
        zip \
        unzip \
        && docker-php-ext-configure zip \
        && docker-php-ext-install zip pdo_mysql

RUN apt-get update && apt-get install -y nginx

COPY ./docker/ /var/www/html

#RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
#RUN chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

RUN chown -R www-data:www-data /var/www/html/
RUN chmod -R 775 /var/www/html/

COPY docker/nginx.conf /etc/nginx/sites-available/default
#RUN ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/

#EXPOSE 80

CMD service nginx start && php-fpm