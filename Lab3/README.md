# Teil 1

## Vorgehensweise

docker-compose.yml File erstellen, welches wordPress und eine sepetrate MySQL Instance erstellt, mit Volume um die Daten
persistent halten zu können. 

CMD -> docker-compose up -d 

pulls die benötigten Docker Images & startet wordpress + Datenbank  container 

docker-compose down -> entfernt den container + default network, WordPress DB bleibt aber persistent

docker-compse down --volumes -> entfernt den container, default network & die WordPress DB 
# Teil 2

## Vorgehensweise

Für beide Images ein Dockerfile anlegen -> code Dockerfile
Individuelle Befehle in Dockerfile angeben.
-> alle benötigten Anweisungen in docker-compose.
docker-compose build -> to build unsere custom image
docker-compose up -> to run unser custom image

### Apchae + PHP + Wordpress
docker-entrypoint.sh -> to initialize stateful data in a container runtime.

### MySQL

Create Docker image -> docker build -t MySQL
start mySQL container from Image ->
docker run -d -p 3306:3306 --name my-mysql \ -e MYSQL_ROOT_PASSWORD=supersecret my-mysql
docker run curl-container curl www.google.com


Push Image to Docker repository -> docker push <your-repo-ip>:5000/curl-container
Deploy Image ->  docker pull <your-repo-ip>:5000/curl-container
  
Volumes -> docker volume create
        -> docker volume prune
        -> oder während container oder Service  erstellung
    ist stored in Directory am host
    kann in mehreren gleichzeit sein. 
    support auch volume drivers 

# docker-entrypoint.sh
sed -> non-interactive textfile editor (Textfilter, d bestimmte ZEichenkombinationen sucht & ersetzt)
    -> einfaches suchen & ersetzten von Zeichenfolgenwerten

sed s/SUCHEN/ERSETZEN/g
sed 's/findme/replacewithme/g' file-to-search.txt > file-to-write-output.txt

    -> zeichenfolge die in angegebenen Datei zu finden ist (findme)
    -> zeichenfolge zum ersetzen aller Instanzen der gefunden Zeichenfolge (replayewithme) 
    -> Pfad zu durchsuchenden Datei (file-to-search.txt)
    -> Pfad zur Datei zur Ausgabe der Ergbenisse (optional (file-to-write-output.txt)

# Best Practice Dockerfiles
- docker erstellt images automatisch beim lesen der Anweisungen im Dockerfile.
- besteht aus schreibgeschützten Ebenen, von denen jede eine Dockerfile-Anweisung darstellt. Die Ebenen sind gestartet und jede ist ein Delta der Änderung gegenüber der vorherigen Ebene.
FROM -> kreiert layer
COPY -> fügt Dateien aus dem aktuellen Verzeichnis des Docker-client hinzu.
RUN -> builds the application
CMD -> gibt an welcher Befehl im Container ausgeführt werden soll.

wenn ein Image ausgeführt wird & COntainer erstellt wird, fügt man über den darunterliegenden Ebenen eine neue (Containerebene) Ebene hinzu -> alle änderungen werden in die dünne Containerebene beschrieben.

## allgemeine Richtllienen & Emfpehlungen
### kurzlebige Container erstellen
### build context
docker-build command , wird das aktuelle Arbeitsverzeichnis als Build-Kontext bezeichnet.

### multi-stage builds
dadurch kann die Größe des endgültigen Bilds drastisch reduziert werden, ohne die Anzahl der Zwischenebenen und Dateien zu verringern.
- Image wird erst in der letzten Phase des Erstellungsprozesses erstllt.
- installieren der Tools, die zum Erstellen von Anwenudng benötigt werden
- istallieren/update library dependencies
- generate Application

### keine unnötigen Packages installieren
### Anwendungen entkoppeln
jeder Container sollte nur ein Problem haben. (erleichtert das horizontale skalieren)
- container network um kommunikation zw. Container zu gewährleisten

### ANzahl der Ebenen minimieren
nur RUN,COPS,ADD erstellen Ebenen. andere Anweisungen erstellen temporäre zwischen Images

## Dockerfile instructions
### FROM

### Label 
bildbeschrieftungen hinzufügen
###