export default class CategoryModel {
    private id: number;
    private title: string;
    private slug: string;
    private url: string;
    private published: boolean;

    constructor() {
        this.id = 0;
        this.title = '';
        this.slug = '';
        this.url = '';
        this.published = true;
    }
}
