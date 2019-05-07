import { Person } from './class-extends-implements ';
import { Office } from './generic-construction';

const openSpace = new Office<number, Person>();
const vasya = new Person(1, 'Vasya', 23, 'story');
const viktor = new Person(2, 'Viktor', 29, 'story');
const viktoria = new Person(3, 'Viktoria', 32, 'story');

openSpace.addEmployee(vasya.id, vasya);
openSpace.addEmployee(viktor.id, viktor);
openSpace.addEmployee(viktoria.id, viktoria);


console.log(openSpace.getOffice());
console.log(openSpace.getEmployee(1));
console.log(openSpace.getEmployee(3));
