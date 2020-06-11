const request = require('request')
const cord = require('./utils/geocode.js')
const pred = require('./utils/forecast.js')
const address = process.argv[2]

if (!address) {
    console.log("Please Provide Address!!!")
} else {
    cord.geocode(address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            console.log("Error: ", error)
        }
        pred.forecast(latitude, longitude, (error, forecastdata) => {
            if (error) {
                return console.log(error)
            }
            console.log('Location: ' + location)
            console.log('Data: ', forecastdata)
        })
    })
}

//if (!address) {
//    console.log("Please Provide Address!!!")
//} else {
//    cord.geocode(address, (error, data) => {
//    if (error) {
//        console.log("Error: ", error)
//    } 
//    pred.forecast(data.latitude, data.longitude, (error, forecastdata) => {
//        if (error) {
//            return console.log(error)
//        }
//        console.log('Location: ' + data.location)
//        console.log('Data: ', forecastdata)
//    })
//})

//}


//console.log("Starting")

//setTimeout(() => {
//	console.log("2 sec Timer")
//}, 2000)

//setTimeout(() => {
//	console.log("1 sec Timer")
//}, 1000)

//console.log("Stopping")