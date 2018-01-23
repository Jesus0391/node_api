'use strict';

var uuid = require('node-uuid');
var Locality = require('../models/locality');

class LocalityService{

    constructor(){
        this.localities = [
            
        ];
        let locality = new Locality();
        locality.setId("adf2D)d");
        locality.setName("Santo Domingo");
        this.localities.push(locality);
    }
    //Get all locations
    getLocalities(){
        return this.localities;
    }

    getSingleLocality(id){
        var locality = this.localities.filter(p=>p.id === id)[0];

        return locality || null;
    }
}
module.exports = new LocalityService();