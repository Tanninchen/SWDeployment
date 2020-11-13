FROM debian:jessie

ENV MYSQL_DATABASE wordpress




ENTRYPOINT ["sql"]



RUN apt-get install mysql-server

RUN mysql -u root -p
 

COPY ./sql-scripts/ /docker-entrypoint-initdb.d/