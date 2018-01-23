'use-strict';

var uuid = require('node-uuid');

class IncidentService{
    constructor(){
        this.incidents = [
           
        ];
    }

    getIncidents(){
        return this.incidents.filter(i=>i.isArchived === false);
    }

    getSingleIncident(id){
        var incident = this.incidents.filter(i=>i._id === id && i.isArchived === false)[0];

        return incident || null;
    }
    
    save(model){
        model._id = uuid.v4();
        this.incidents.push(model);
        return true;
    }

    archive(id){
        var incident = this.getSingleIncident(id);
        incident.isArchived = true;
        return true;
    }
}

module.exports = new IncidentService();