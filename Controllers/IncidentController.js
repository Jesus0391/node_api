'use strict';
var Incident = require('../models/incident');
var incidentService = require('../Services/IncidentService');
var Enum = require('enum');

class IncidentController{
    
    constructor(router) {
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes(){
        this.router.get('/incidents', this.getIncidents.bind(this));
        this.router.post('/incidents', this.saveIncident.bind(this));
        this.router.post('/incidents/:incidentId/archive', this.putIncident.bind(this));
    }

    //GET
    getIncidents(req, res){
        var incidents = incidentService.getIncidents();

        res.send(incidents);
    }

    //POST 
    saveIncident(req, res){
        var kinds = new Enum(['ROBBERY', 'MURDER', 'TRAFFIC_ACCIDENT', 'SHOOTING', 'ASSAULT']);
        var isExist = kinds.get(req.kind);//'req.body.kind);  
        console.log(req.payload.kind);
        /*if (isExist){

            var incident = new Incident();
            incident.setKind(kinds.get('ROBBERY'));
            incident.setLocationId(req.locationId);
            incident.setHappenedAt(req.happenedAt);
            incidentService.save(incident);
            res.send({message: "Incident saved"});

        }else{
            res.send({message: "Incident don't saved", 
                        incidentRequest: req});
        }*/
    }

    //ARCHIVE
   putIncident(req, res){
        incidentService.archive(req.params.incidentId);
        res.send({message: "Incident archived", incedents: incidentService.getIncidents()});


   }
}
module.exports = IncidentController;