#mySQL-Server
FROM debian:jessie

ENV MYSQL_DATABASE=wordpress
ENV MYQL_PW=password123
ENV ACCEPT_EULA=Y

#install apache 
RUN sudo apt-get updat e& install apache2

# apache config zeile hinzufügen um Warning zu unterdrücken
RUN  sudo nano /etc/apache2/apache2.conf
# -> ServerName server_domain_or_IP

# apache neustarten
RUN  sudo systemctl restart apache2

# eingehenden Datenverkehr zulassen
RUN sudo ufw allow in "Apache Full"

# danach wird aufgefordert Kennwort für sql root benutzer
RUN apt-get install & update mysql-server

#simple security script , danach pw eingeben
# nein um fortzufahren
RUN mysql_secure_installation

#PHP installiere (verarbeitet Code um dynamisch Inhalt anzuzeigen.)
# kann scripte ausführen, verbindung zum mySQL DB herstellen
RUN sudo apt-get install php libapache2-mod-php php-mcrypt php-mysql

# dir.conf bearbeiten, PHP an erste stelle
RUN c/apache2/mods-enabled/dir.conf

#<IfModule mod_dir.c>
 #   DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
#</IfModule>

RUN sudo systemctl restart apache2

RUN mysql -u root -p

COPY dataTable.sql dataTable.sql

EXPOSE 3307

ENTRYPOINT ["sql"]

 

COPY ./sql-scripts/ /docker-entrypoint-initdb.d/