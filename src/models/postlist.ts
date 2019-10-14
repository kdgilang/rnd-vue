export default class PostListModel {
    public title: string;
    public priceLabel: string;
    public tagLabel: string;
    public locationLabel: string;
    public companyName: string;
    public imgsrc: string;
    public map: MapModel;
    public catIds: number[];

    constructor() {
        this.title = '';
        this.priceLabel = '';
        this.tagLabel = '';
        this.locationLabel = '';
        this.companyName = '';
        this.imgsrc = '';
        this.map = {lat: 0, lng: 0};
        this.catIds = [];
    }
}

export interface MapModel {
    lat: number;
    lng: number;
}
