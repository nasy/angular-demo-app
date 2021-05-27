FROM composer:1.6.5 as build
WORKDIR /app
COPY dist/visage-app /app

FROM php:7.4-apache

EXPOSE 8080
COPY --from=build /app /var/www/html
COPY docker/000-default.conf /etc/apache2/sites-available/000-default.conf
COPY docker/php.ini /usr/local/etc/php/php.ini-production

RUN echo "Listen 8080" >> /etc/apache2/ports.conf
RUN chown -R www-data:www-data /var/www/html/ \
    && a2enmod rewrite
