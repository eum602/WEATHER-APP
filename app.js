const request = require('request')
const chalk = require('chalk')

const url = "https://api.darksky.net/forecast/f1d60d08ed11ec2553fe01dee752e52e/12.3601,76.7963?units=si&lang=es"

request({url:url,json:true},(error, response)=>{    
    //const data = JSON.parse(response.body)
    if(error){
        console.log(chalk.red.inverse('unable to connect - check your network'))
    }else if(response.body.error){
        console.log(chalk.red.inverse('Unable to find location'))
    }else{
        console.log(chalk.green.inverse(`${response.body.daily.data[0].summary}. It is currently ${response.body.currently.temperature} degrees. There is a ${response.body.currently.precipProbability}% chance of rain`))
        
    }    
})

//Geocoding
//Address => lat/long => weather
const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiZXVtNjAyIiwiYSI6ImNqdmEwbzdmYzBmM2UzeW5taTd1cmt2OXAifQ.yoI271duk2lJ5jFCxqE6sw"
const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Punta%20Negra.json?access_token=${MAPBOX_ACCESS_TOKEN}`
request({url:geocodeURL, json:true},(error, response)=>{
    if(error){
        console.log(chalk.red.inverse('unable to connect - check your network'))
    }else if(response.body.error){
        console.log(chalk.red.inverse('Unable to find location'))
    }else{
        const latitude = response.body.features[0]['center'][1]
        const longitude = response.body.features[0]['center'][0]
        console.log(chalk.green(`latitude: ${latitude}`))
        console.log(chalk.green(`longitude: ${longitude}`))        
    }    
})


