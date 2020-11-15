#mySQL-Server
FROM debian:jessie

ENV MYSQL_DATABASE=wordpress
ENV MYQL_PW=password123
ENV ACCEPT_EULA=Y


RUN mysql -u root -p
RUN apt-get install & update mysql-server


COPY dataTable.sql dataTable.sql

EXPOSE 3307





ENTRYPOINT ["sql"]

 

COPY ./sql-scripts/ /docker-entrypoint-initdb.d/