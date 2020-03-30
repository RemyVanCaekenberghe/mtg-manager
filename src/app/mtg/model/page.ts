export class Page {

    public number: number;
    public isLastPage: boolean;
    public title: string;

    constructor() {
        this.number = 1;
        this.isLastPage = true;
        this.title = '';
    }
}
