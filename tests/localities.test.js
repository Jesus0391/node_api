'use strict';
var assert = require('assert');
var localityService = require('../Services/LocalityService');

describe('Localities', function(){
  it('It should allow retrieving a list of all localities in the city', function(){
    var localities = localityService.getLocalities();
    assert.equal(localities.length > 0, 1, "Localiy it should be 1");
  });

  it('It should allow retrieving a single locality', function(){
    var locality = localityService.getSingleLocality("adf2D)d");
    assert.equal(locality.name, "Santo Domingo", "Localiy it should be 1");
  });
});
