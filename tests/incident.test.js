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
    assert.equal(incidentService.getIncidents().length, 2, "The list don't get the correct incidents");
  });

  
  it('It should allow archiving incidents', function(){

    var model = new Incident();
    model.Kind = "MURDER";
    model.HappenedAt = "2018-01-16T17:14:54.732Z";
    model.isArchived = false;
    
    var result = incidentService.save(model);
    var incident = incidentService.getIncidents()[0];
    
    incidentService.archive(incident._id);
    var incidents = incidentService.getIncidents();

    
    assert.equal(incidentService.getIncidents().length, 2, "Validate incidents archiving");
  });
});
