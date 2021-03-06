#!/bin/bash

sed -i 's/127.0.0.1/0.0.0.0/g' /etc/mysql/my.cnf
sed -i "s/dbname/$DB_NAME/g" /docker-initdb-dataTable.d/dataTable.sql
sed -i "s/dbuser/$DB_USER/g" /docker-initdb-dataTable.d/dataTable.sql
sed -i "s/dbpassword/$DB_PASSWORD/g" /docker-initdb-dataTable.d/dataTable.sql

mysqld --init-file="/docker-initdb-dataTable.d/dataTable.sql"