const request = require('request')

const fetchWeather = (lat, long, completion) => {
    const url = `https://api.darksky.net/forecast/eeff41c46741b354058ebe23b4d25632/${lat},${long}`
    request( {url: url, json: true}, (error, {body}) => {
        if (error) {
            completion(error,null)
        } else if (body.error) {
            completion(body.error,null)
        } else {
            completion(null,body.hourly.summary)
        }
        
    })
}

module.exports = fetchWeather