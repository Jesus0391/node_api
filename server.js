'use strict';

var LocalityController = require('./Controllers/LocalityController');
var IncidentController = require('./Controllers/IncidentController');

var express = require('express');
var app = express(); 
var port = process.env.PORT || 3000;
var router = express.Router(); 
var bodyParser = require('body-parser')

router.use(function(req, res, next){
    console.log("Request: "+req);
    next();
});


//Register Controller's
var locality = new LocalityController(router);
var incidentController = new IncidentController(router);

app.use('/', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.listen(port);

console.log("Starting application on port " + port);
