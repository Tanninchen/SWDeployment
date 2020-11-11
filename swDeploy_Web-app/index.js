const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const insight = require('applicationinsights')
appInsights.setup('8983428a-19da-413a-bf1f-731300b1ebe7').start();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})