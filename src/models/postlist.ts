export default class PostListModel {
    public title: string;
    public priceLabel: string;
    public tagLabel: string;
    public locationLabel: string;
    public companyName: string;
    public imgsrc: string;
    public catIds: number[];

    constructor() {
        this.title = '';
        this.priceLabel = '';
        this.tagLabel = '';
        this.locationLabel = '';
        this.companyName = '';
        this.imgsrc = '';
        this.catIds = [];
    }
}
