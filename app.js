const express = require('express')
const app = express()
const port = 3000

app.get('/data/2.5/weather', (req, res) => {
  console.log("aasmaan mein udte hai ghode kya gaur se dekhra re dash..")
  res.json({"coord":{"lon":-123.262,"lat":44.5646},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"base":"stations","main":{"temp":284.34,"feels_like":283.5,"temp_min":282.9,"temp_max":285.32,"pressure":1025,"humidity":76},"visibility":10000,"wind":{"speed":5.14,"deg":170},"clouds":{"all":100},"dt":1642653018,"sys":{"type":2,"id":2012991,"country":"US","sunrise":1642607019,"sunset":1642640617},"timezone":-28800,"id":5720727,"name":"Corvallis","cod":200})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
