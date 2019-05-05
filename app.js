const request = require('request')
const chalk = require('chalk')
const geocode = require('./utils/geocode')
const forecast =  require('./utils/forecast')
geocode('Libia', (error,data) => {
    let location
    if(data && !error){
        location = data.location
    }    
    forecast(data.latitude, data.longitude,(error,data)=>{
        if(error){
            console.log('Error',error)
        }else{
            console.log(chalk.green.inverse(`${location}\n ${data}`))
        }        
    })    
})
