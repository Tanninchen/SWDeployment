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
  
