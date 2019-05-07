import { Human } from './abstract-class';
import { HumanDTO } from './data-transfer-object';

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
