import request from 'request'

class WeatherController {

  constructor(router) {
    router.post('/', this.getWeather.bind(this))
  }

///////////////////////
//Get account by session
///////////////////////
  async getWeather(req, res) {

    console.log('BODY ==> ', req.body)
    let city = req.body.city
    console.log(`CITY ==> ${city}`)

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.WEATHER_API_KEY}`

    request(url, function (err, response, body) {
      if (err) {
        res.json({ weather: null, error: 'Error, please try again' })
      } else {
        let weather = JSON.parse(body)
        res.json({ weather: weather, error: null })
      }
    })
  }
}

module.exports = WeatherController