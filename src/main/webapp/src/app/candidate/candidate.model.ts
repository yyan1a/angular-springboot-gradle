export class Candidate {
    public firstName: string;
    public lastName: string;
    public country: string;
    public availableAfter: string

    constructor(firstName: string, lastName: string, country: string, availableAfter: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.availableAfter = availableAfter;
    }

}
