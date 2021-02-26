const express = require('express');
const { Http2ServerRequest } = require('https');
const https = require('https');
const app = express ();

app.get('/',(req,res)=>{
    https.get('https://api.openweathermap.org/data/2.5/weather', (res)=>{
        
    res.on('data',(data)=>{
       const weatherdata = JSON.parse(data)
       console.log(weatherdata);
    })
      
    })

    res.send('server is up and running')
})

drtsrysydsytryy



app.listen(2000, () =>{
    console.log('server is running on port 2000');
})