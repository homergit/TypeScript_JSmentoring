export class PersonModel {
    personalData: {};
    id: number;
    salary: number;

    addPersone(person) {
        this.personalData = person.personalData;
        this.id = person.id;
        this.salary = person.salary;
    }

    getPersonalData() {
        console.log(this.personalData);

        return this.personalData;
    }

    getSelary() {
        console.log(this.salary);

        return this.salary;
    }

    setSelary(salary) {
        this.salary = salary;
    }
}
