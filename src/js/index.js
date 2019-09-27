const axios = require('axios')

axios.get('https://www.nhc.noaa.gov/index-at.xml')
    .then(response => {
        console.log( response)
    })
