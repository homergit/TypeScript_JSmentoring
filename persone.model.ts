export class PersoneModel {
    constructor(people = []) {
        this.people = people;
    }

    type Model = {
        dimension: number;
        innerRadius: number;
    };
    let persone: Model = {
        dimension: 1,
        innerRadius: 2
    };

    addPersone(persone) {
        this.people.push(persone);
    }

    getPersonalData (){
        return this.people.length;
    }

    getSelary (){
        return this.people.length;
    }

    setSelary () {
        return this.people.length;
    }
}
