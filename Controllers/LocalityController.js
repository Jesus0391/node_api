'use strict';

var localityService = require('../Services/LocalityService');

class LocalityController{
    
    constructor(router) {
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes(){
        this.router.get('/localities', this.getLocalities.bind(this));
        this.router.get('/localities/:localityId', this.getSingleLocality.bind(this));
    }

    getLocalities(req, res){
        var localities = localityService.getLocalities();
        res.send(localities);
    }

    getSingleLocality(req, res){
        var id = req.params.localityId;
        var locality = localityService.getSingleLocality(id);

        if (!locality){
            res.sendStatus(404);
        }else{
            res.send(locality);
        }
    }
}
module.exports = LocalityController;