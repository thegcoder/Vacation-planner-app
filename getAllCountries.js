const axios = require('axios');


axios.get('https://restcountries.eu/rest/v2/all')
  .then((res) => res.data)
  .then((allCountries) => {
    allCountries.forEach((c) => {
      console.log(c.name)
    })
  })
