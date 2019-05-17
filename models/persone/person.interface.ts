export interface PersonDTO {
    firstName: string,
    age: number,
    secondName: string
}

export interface PersonDataDTO {
    personalData: PersonDTO,
    id: number,
    salary: number
}
