import {PersonDTO, PersonDataDTO} from "./person.interface";

export class PersonModel implements PersonDTO, PersonDataDTO {

    firstName: string;
    age: number;
    secondName: string;
    personalData: PersonDTO;
    id: number;
    salary: number;

    addPerson(person: PersonDataDTO) {
        this.personalData = person.personalData;
        this.id = person.id;
        this.salary = person.salary;
    }

    getPersonalData(): PersonDTO {
        console.log(this.personalData);

        return this.personalData;
    }

    getSelary(): number {
        console.log(this.salary);

        return this.salary;
    }

    setSelary(salary: number): void {
        this.salary = salary;
    }
}
