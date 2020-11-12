const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const insight = require('applicationinsights')
appInsights.setup('e3165afd-e110-42fe-8a5f-af5ab603da49').start();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})