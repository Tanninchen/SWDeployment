FROM debian:jessie

ENV MYSQL_DATABASE wordpress

RUN apt-get install mysql-server

RUN apt-get update && apt-get install -y wget

COPY ./sql-scripts/ /docker-entrypoint-initdb.d/