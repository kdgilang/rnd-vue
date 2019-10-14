export default class PostModel {
    public token: string;
    public postPerPage: number;
    public list: any[];

    constructor() {
        this.token = '';
        this.postPerPage = 10;
        this.list = [];
    }
}
