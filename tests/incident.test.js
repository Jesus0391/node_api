'use strict';
var assert = require('assert');
var incidentService = require('../Services/IncidentService');
var Incident = require('../models/incident');

describe('Incidents', function(){
  it('It should allow registering new incidents', function(){
  
    var model = new Incident();
    model.Kind = "MURDER";
    model.HappenedAt = "2018-01-16T17:14:54.732Z";
    model.isArchived = false;
    var result = incidentService.save(model);
    
    assert.equal(result, true, "Don't save news incidents");
  });

  it('It should allow retrieving a list of incidents', function(){

    var model = new Incident();
    model.Kind = "MURDER";
    model.HappenedAt = "2018-01-16T17:14:54.732Z";
    model.isArchived = false;
    var result = incidentService.save(model);
    console.log(incidentService.getIncidents());
    assert.equal(incidentService.getIncidents().length, 1, "The list don't get the correct incidents");
  });

  
  it('It should allow archiving incidents', function(){
    incidentService.archive("eWRhpRV");
    assert.equal(locality.name, "Santo Domingo", "Localiy it should be 1");
  });
  
  it('It should allow retrieving a list of incidents', function(){
    /*var incidentService = new IncidentService(); 
    var result = incidentService.save({ _id = "eWRhpRV",
    kind = "MURDER", // One of [ROBBERY, MURDER, TRAFFIC_ACCIDENT, SHOOTING, ASSAULT]
    locationId = "23TplPdS",
    happenedAt = "2018-01-16T17:14:54.732Z",
    isArchived = false});

    assert.equal(incidentService.getIncidents().length, 1, "The list don't get the correct incidents");*/
  });

});
