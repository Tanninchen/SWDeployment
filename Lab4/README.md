# Ablauf

- Ressource Gruppe anlegen 
    az group create --name ressourceGroupLab4 --location westeurope

- AKS CLuster erstellen
    az aks create --resource-group ressourceGroupLab4 --ing --generate-ssh-keys

![AKS](Screenshots/AKSTeil1.PNG)
![AKS](Screenshots/AKSTeil2.PNG)
![AKS](Screenshots/AKSTeil3.PNG)

- connect to cluster 
    az aks install-cli

- add Credential
    az aks get-credentials --resource-group ressourceGroupLab4 --name AKSClusterLap4

- Yaml Files anlegen

- Password für MySQL DB anlegen -> secret auf K8s Cluster erstellen.
    -> Azure CLI -> kubectl create secret generic mysql-pass --from-literal=password=password123

- Upload mysql & wordpress in Azure clouddrive
- create mySQL Pod and Service 
    kubectl apply -f /home/buczkowski/mysql.yaml

![Upload MYSQL](Screenshots/creatPersistentvolume.PNG)

- create wordpress pod and Service
    kubectl apply -f /home/buczkowski/wordpress.yaml

![get all Ressources](Screenshots/kubectlgetAll.PNG)
![Azure Services](Screenshots/AzureServices.PNG)

- wordpress ist nun über die 'External-IP' erreichbar http://51.105.239.197/

![Wordpress is Running](Screenshots/WordpressLab4.PNG)
![Wordpress default page](Screenshots/WordpressDefaultRunnung.PNG)