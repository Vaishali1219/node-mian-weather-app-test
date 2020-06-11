const request = require('request')
const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmFpc2hhbGkwMzEyIiwiYSI6ImNrYjRsYzFyeDB4dW8ydXBhZXk2ZHJkejQifQ.P65LDXXQy5sUKjFJVRnCPw"

const options = {
    url: url,
    json: true
}

const getCords = () => {
    request(options, (error, response) => {
        const temp = []
        if (error) {
            console.log("Network Error")
        } else if (response.body.features.length === 0) {
            console.log("Location Not Found")
        } else {
            //console.log("Longitude: " + response.body.features[0].center[0])
            //console.log("Latitude: " + response.body.features[0].center[1])
            //console.log(response.body.features[0].center)
            const Longitude = response.body.features[0].center[0]
            const Latitude = response.body.features[0].center[1]
            temp.push(Longitude)
            temp.push(Latitude)
            //console.log(temp)
            //temp.forEach((t) => {
            //    console.log(t)
            //})
            return this.temp
        }
    })
}

module.exports = {
    getCords: getCords
}

