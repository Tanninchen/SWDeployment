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
