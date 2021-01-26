const express = require("express");

const app = express();

app.use('/public', express.static(__dirname))
app.listen( 3000, (req, res) => {
    console.log(' server started on http://localhost:3000')
})