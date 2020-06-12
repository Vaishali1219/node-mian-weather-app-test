const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&appid=5a92ca27186ac7f0f1066a8372c4632a"
    const options = {
        url,
        json: true
    }
    request(options, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, body.main)
        }
    })
}

module.exports = {
    forecast: forecast
}
