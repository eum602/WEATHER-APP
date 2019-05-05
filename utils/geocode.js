const request=require('request')

//VARIABLES
const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiZXVtNjAyIiwiYSI6ImNqdmEwbzdmYzBmM2UzeW5taTd1cmt2OXAifQ.yoI271duk2lJ5jFCxqE6sw"

//Geocoding
//Address => lat/long => weather
const geocode = ((address , callback )=> {    
    const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${MAPBOX_ACCESS_TOKEN}`
    request({url:geocodeURL, json:true},(error, response)=>{
        if(error){
            //console.log(chalk.red.inverse('unable to connect - check your network'))
            callback('unable to connect - check your network',undefined)
        }else if(response.body.features.length===0){
            //console.log(chalk.red.inverse('Unable to find location'))
            callback('unable to find location',undefined)
        }else{
            callback(undefined,{
                latitude:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    }) 
})

module.exports = geocode