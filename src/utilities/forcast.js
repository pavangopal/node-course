const request = require('request')

const fetchWeather = (lat, long, completion) => {
    const url = `https://api.darksky.net/forecast/eeff41c46741b354058ebe23b4d25632/${lat},${long}`
    request( {url: url, json: true}, (error, {body}) => {
        if (error) {
            // console.log("unable to connect to server");
            completion(error,null)
        } else if (body.error) {
            // console.log("unable to  find location");
            completion(body.error,null)
        } else {
            const weather = body
            // console.log(weather.hourly.summary);    
            completion(null,weather.hourly.summary)
        }
        
    })
}

module.exports = fetchWeather