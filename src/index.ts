import { Person } from '../models/persone/Persone.class';
import { Office } from './generic-construction';
import { PersonModel } from './persone.model';

const openSpace = new Office<number, Person>();
const vasya = new Person(1, 'Vasya', 23, 'story');
const viktor = new Person(2, 'Viktor', 29, 'story');
const viktoria = new Person(3, 'Viktoria', 32, 'story');
const personModel = new PersonModel();

openSpace.addEmployee(vasya.id, vasya);
openSpace.addEmployee(viktor.id, viktor);
openSpace.addEmployee(viktoria.id, viktoria);

console.log(openSpace.getOffice());
console.log(openSpace.getEmployee(1));
console.log(openSpace.getEmployee(3));


  fetch('https://api.github.com/users/homergit/repos').then(
    resp => resp.json()
  ).then(repos => {
    for (const repo of repos) {
      console.log(repo.name);
    }

    personModel.addPersone(
        {'personalData': {'firstName': 'vasya', 'age': 23, 'secondName': 'qwerty'}, 'id': 1, 'salary': 100}
        );
    personModel.getPersonalData();
    personModel.getSelary();
    personModel.setSelary(200);
    personModel.getSelary();
  }).catch(ex => {
    console.error(ex);
  });