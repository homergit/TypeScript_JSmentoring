export class Office<A, B> {
    private office: Array<{ id: A, value: B }> = [];

    getOffice(): Array<{ id: A, value: B }> {
        return this.office;
    }

    getEmployee(id: A): B {
        const index = this.office.findIndex(item => item.id === id);

        return this.getOffice()[index].value;
    }

    addEmployee(id: A, value: B): void {
        this.office.push({ id, value });
    }
}
