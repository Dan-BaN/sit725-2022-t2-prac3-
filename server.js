var express = require('express')
var app = express()
var port   = process.env.PORT || 3001;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})