const express = require('express');
const { Http2ServerRequest } = require('https');
const https = require('https');
const app = express ();

app.get('/',(req,res)=>{
    https.get('https://api.weatherapi.com/v1/current.json?key=2bdc5a8aac3e4d7782934959212602&q=mumbai&aqi=no', (res)=>{
        console.log(res.statusCode)
        
    res.on('data',(data)=>{
       const weatherdata = JSON.parse(data)
       console.log(weatherdata);
       const temp = weatherdata.main.temp
       const weatherDescription = weatherdata.weather[0].description 
    })
      
    })

    res.send('server is up and running')
})

app.listen(2000, () =>{
    console.log('server is running on port 2000');
})