az version
az login 


az group create --name "SWDeployment" --location "North Europe"
 -> azure portal - resource groups - store account, web api zu verfügung stellen 
az deployment 

az deployment group create --name swDeploymentgroup --resource-group SWDeployment --template-file azuredeploy.json --parameters azuredeploy.parameters.json
