'use-strict';

class Locality{
    constructor(){
        this.id = "";
        this.name = "";
    }

    getId(){
        return this.id;
    }
    setId(value){
        this.id= value;
    }

    getName(){
        return this.name;
    }
    setName(value){
        this.name = value;
    }
}

module.exports = Locality;