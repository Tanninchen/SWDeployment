#wordpress
FROM debian:jessie

ENV DB_NAME=wordpressdb
ENV DB_User=tanja
ENV DB_PASSWORD=password123
ENV DB_HOST=db:3306

#mySQL root account
#RUN mysql -u root -p

# seperate DB erstellen, die Wordpress steuern kann.
#RUN  CREATE DATABASE wordpress DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

# account um zugriff auf DB zu gewähren
#RUN GRANT ALL ON wordpress.* TO 'wordpressuser'@'localhost' IDENTIFIED BY 'password';
#RUN FLUSH PRIVILEGES;
#RUN EXIT;

# zusäztliche PHP extensions
#RUN apt-get update && apt-get install  php-curl php-gd php-mbstring php-mcrypt php-xml php-xmlrpc

#apache neu starten
#RUN sudo systemctl restart apache2
RUN apt-get update
#wordpress installieren
RUN apt-get install wordpress -y
#RUN cd /tmp
#RUN curl -O https://wordpress.org/latest.tar.gz
# komprimierte Datei extrahieren, um Wordpress directory zu erstellen
#RUN tar xzvf latest.tar.gz

# dummy hinzufügen
#RUN touch /tmp/wordpress/.htaccess
#RUN chmod 660 /tmp/wordpress/.htaccess

# Bsp-config 
#RUN cp /tmp/wordpress/wp-config-sample.php /tmp/wordpress/wp-config.php

#alles in DokumentRoot verzeichnis kopieren.

#RUN  sudo cp -a /tmp/wordpress/. /var/www/html

#name vn sudo benutzer, eigentum an allen Datein in dokument Root.
#RUN sudo chown -R tanja:www-data /var/www/html

# setgid setzen
#RUN sudo find /var/www/html -type d -exec chmod g+s {} \;

#RUN apt-get update && apt-get install apache2
#RUN apt-get update && apt-get install mysql-server

RUN mv /var/www/html/index.html /var/www/html/index.bak
COPY docker-entrypoint.sh docker-entrypoint.sh
RUN mv /usr/share/wordpress/wp-config-sample.php /etc/wordpress/config-localhost.php
RUN cp -R /usr/share/wordpress/*  /var/www/html/

CMD DB_NAME=${DB_NAME} DB_USER=${DB_USER} DB_PASSWORD=${DB_PASSWORD} DB_HOST=${DB_HOST}
ENTRYPOINT ./docker-entrypoint.sh
# Port from Container
EXPOSE 80