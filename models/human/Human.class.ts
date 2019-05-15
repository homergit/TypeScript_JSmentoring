export abstract class Human {

    protected constructor(
        public description
    ) {}

    abstract work(): void;

    introduse(): void {
        console.log(this.description);
    }
}
