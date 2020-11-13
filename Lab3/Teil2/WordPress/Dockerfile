FROM debian:jessie

RUN apt-get update && apt-get install  php-curl php-gd php-mbstring php-mcrypt php-xml php-xmlrpc

RUN apt-get update && apt-get install apache2

RUN apt-get update && apt-get install mysql-server




RUN cd /var/www/html/


COPY . /var/www/html


RUN apt-get install all_my_dependencies
ADD my_app_files /my_app

CMD ["/my_app/start.sh"]