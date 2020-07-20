const request = require('request')

const getGeoCode = (locationName, completion) =>  {
    const geoEncodingURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(locationName)}.json?access_token=pk.eyJ1IjoicGF2YW5nb3BhbCIsImEiOiJja2J6Y3Y3NDYwYXo3MzRwc3M3emEweG5lIn0.-ONJpIWaNF4HTVfrGvTh4w`

    request({url: geoEncodingURL, json: true}, function(error, { body }) {
        const long = body.features[0].center[0]
        const lat = body.features[0].center[1]

        completion(lat,long)
    })
}

module.exports = getGeoCode