#mySQL-Server
FROM debian:jessie

ENV DB_NAME=wordpressdb
ENV DB_User=tanja
ENV DB_PASSWORD=password123
#ENV ACCEPT_EULA=Y

USER root

RUN apt-get update 

RUN DEBIAN_FRONTEND=noninteractive apt-get install -y mysql-server

COPY docker-entrypoint.sh docker-entrypoint.sh
COPY install.sh install.sh
COPY dataTable.sql /docker-initdb-dataTable.d/
RUN ./install.sh
CMD DB_NAME=${DB_NAME} DB_USER=${DB_USER} DB_PASSWORD=${DB_PASSWORD}
ENTRYPOINT ./docker-entrypoint.sh

EXPOSE 3306/tcp
