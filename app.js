const request = require('request')

const url = "https://api.darksky.net/forecast/f1d60d08ed11ec2553fe01dee752e52e/37.8267,-122.4233"

request({url:url},(error, response)=>{    
    const data = JSON.parse(response.body)
    //console.log(data)
    console.log(data.currently)
})
