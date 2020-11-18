#wordpress
FROM debian:jessie

ENV DB_NAME=wordpressdb
ENV DB_User=tanja
ENV DB_PASSWORD=password123
ENV DB_HOST=db:3306

RUN apt-get update
#wordpress installieren
RUN apt-get install wordpress -y


RUN mv /var/www/html/index.html /var/www/html/index.bak
COPY docker-entrypoint.sh docker-entrypoint.sh
RUN mv /usr/share/wordpress/wp-config-sample.php /etc/wordpress/config-localhost.php
RUN cp -R /usr/share/wordpress/*  /var/www/html/

CMD DB_NAME=${DB_NAME} DB_USER=${DB_USER} DB_PASSWORD=${DB_PASSWORD} DB_HOST=${DB_HOST}
ENTRYPOINT ./docker-entrypoint.sh
# Port from Container
EXPOSE 80/tcp