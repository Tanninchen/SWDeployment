FROM debian:jessie

ENV MYSQL_DATABASE wordpress

RUN apt-get update && apt-get install -y sql

ENTRYPOINT ["sql"]



RUN apt-get install mysql-server



COPY ./sql-scripts/ /docker-entrypoint-initdb.d/