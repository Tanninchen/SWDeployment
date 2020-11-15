#wordpress
FROM debian:jessie

#mySQL root account
RUN mysql -u root -p

# seperate DB erstellen, die Wordpress steuern kann.
RUN  CREATE DATABASE wordpress DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

# account um zugriff auf DB zu gewähren
RUN GRANT ALL ON wordpress.* TO 'wordpressuser'@'localhost' IDENTIFIED BY 'password';
RUN FLUSH PRIVILEGES;
RUN EXIT;

# zusäztliche PHP extensions
RUN apt-get update && apt-get install  php-curl php-gd php-mbstring php-mcrypt php-xml php-xmlrpc

#apache neu starten
RUN sudo systemctl restart apache2

#wordpress installieren
RUN cd /tmp
RUN curl -O https://wordpress.org/latest.tar.gz
# komprimierte Datei extrahieren, um Wordpress directory zu erstellen
RUN tar xzvf latest.tar.gz

# dummy hinzufügen
RUN touch /tmp/wordpress/.htaccess
RUN chmod 660 /tmp/wordpress/.htaccess

# Bsp-config 
RUN cp /tmp/wordpress/wp-config-sample.php /tmp/wordpress/wp-config.php

#alles in DokumentRoot verzeichnis kopieren.

RUN  sudo cp -a /tmp/wordpress/. /var/www/html

#name vn sudo benutzer, eigentum an allen Datein in dokument Root.
RUN sudo chown -R tanja:www-data /var/www/html

# setgid setzen
RUN sudo find /var/www/html -type d -exec chmod g+s {} \;



#in -> /var/www/html/wp-config.php
#define('DB_NAME', 'wordpress');

#/** MySQL database username */
#define('DB_USER', 'wordpressuser');

#/** MySQL database password */
#define('DB_PASSWORD', 'password');

#. . .

#Methode festlegen mit der WordPress in das Dateisystem schreiben soll.

#define('FS_METHOD', 'direct');



RUN apt-get update && apt-get install apache2

RUN apt-get update && apt-get install mysql-server



# run command inside the image filesystem
RUN cd /var/www/html/


COPY . /var/www/html


RUN apt-get install all_my_dependencies
ADD my_app_files /my_app

# run specified command within container
CMD ["/my_app/start.sh"]

# Port from Container
EXPOSE 3306