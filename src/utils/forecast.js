const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=68c32c3c7c5570c43dbf9765e7e28039&query=${latitude},${longitude}&units=m`

    request({ url, json: true }, (error, {body}) => {
    if (error) {
        callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
        callback('Unable to find location!', undefined)
    } else {
        callback(undefined, {
            temperature: body.current.temperature,
            feelslike: body.current.feelslike,
            description: body.current.weather_descriptions[0],
            windspeed: body.current.wind_speed
        })
    }
})
}


module.exports = forecast