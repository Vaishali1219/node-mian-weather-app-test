const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')
const request = require('request')
const cord = require('./utils/geocode.js')
const pred = require('./utils/forecast.js')

//console.log(__dirname)
//console.log(path.join(__dirname, './public'))

// Define paths for express config
const viewsPath = path.join(__dirname, './templates/views')
const publicDirectoryPath = path.join(__dirname, './public')
const partialsPath = path.join(__dirname, './templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
	res.render('index', {
		title: "My Weather",
		name: "vaish"
	})
})

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About Me',
		name: 'vaish'
    })
})

app.get('/help', (req, res) => {
	res.render('help', {
		title: "Need Help?",
		msg: "Hey May I help you out"
    })
})

app.get('/weather', (req, res) => {
	place = req.query.location
	if (!place) {
		return res.send({
			error: 'You must provide a location'
		})
	} else {
		cord.geocode(place, (error, { latitude, longitude, location } = {}) => {
			if (error) {
				console.log("Error: ", error)
				return res.send({error})
			}
			pred.forecast(latitude, longitude, (error, forecastdata) => {
				if (error) {
					return console.log(error)
				}
				console.log('Location: ' + location)
				console.log('Data: ', forecastdata)
				console.log(req.query)
				res.send([{
					location,
					forecast: forecastdata
				}])
			})
		})
    }
})

app.get('/products', (req, res) => {
	if (!req.query.search) {
		return res.send({
			error: 'You must Provide a search term'
        })
    }
	console.log(req.query.search)
	console.log(req.query.rating)
	console.log(req.query)
	res.send({
		products: []
    })
})

app.get('/help/*', (req, res) => {
	res.render('demo1', {
		msg: "Help article Not found"
	})
})

app.get('*', (req, res) => {
	res.render('demo1', {
		msg: 'My 404 Page'
	})
})

app.listen(3000, () => {
	console.log('Server started on port 3000')
})


//app.get('', (req, res) => {
//	res.send('<h1>Hello express!</h1>')
//})

//app.get('/help', (req, res) => {
//	res.send([{
//		name: "Vaishali",
//		age: 27
//	}, {
//			name: "Sharath",
//			age: 29
//		}])
//})
//app.get('/about', (req, res) => {
//	res.send("<h1>About Page</h1>")
//})

// app.com
// app.com/help
// app.com/about