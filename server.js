const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello, Rahila Maira'))

var server = app.listen(process.env.PORT || 4000, () => {
    console.log("Hello maira, Listening on port " + server.address().port + "...");
});
