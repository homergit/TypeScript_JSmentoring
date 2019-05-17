import {Human} from '../human/Human.class';
import {HumanDTO} from '../human/human.interface';

export class Person extends Human implements HumanDTO {

    private money = false;

    constructor(
        public id: number,
        public name: string,
        public age: number,
        public description: string
    ) {
        super(description);
    }

    work(): void {
        this.money = true;
    }
}
