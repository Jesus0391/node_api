class Incident{
    constructor(){
        this._id = "",
        this.kind = "",
        this.locationId = "",
        this.happenedAt = "",
        this.isArchived = false
    }

    get_Id(){
        return this._id;
    }
    set_Id(value){
        this._id = value;
    }

    getKind(){
        return this.kind;
    }
    setKind(value){
        this.kind = value;
    }

    getLocationId(){
        return this.locationId;
    }
    setLocationId(value){
        this.locationId = value;
    }

    getHappenedAt(){
        return this.happenedAt;
    }
    setHappenedAt(value){
        this.happenedAt = value;
    }

    /*getisArchived(){
        return this.isArchived;
    }*/
    setisArchived(value){
        this.isArchived = value;
    }
}

module.exports =  Incident;