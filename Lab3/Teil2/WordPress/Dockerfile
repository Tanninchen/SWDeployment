FROM debian:jessie


FROM wordpress:php7.1-apache 
COPY . /var/www/html

RUN apt-get clean
RUN apt-get update
RUN apt-get install apache2
RUN apt-get install php-curl php-gd php-mbstring php-mcrypt php-xml php-xmlrp


RUN apt-get install all_my_dependencies
ADD my_app_files /my_app

CMD ["/my_app/start.sh"]