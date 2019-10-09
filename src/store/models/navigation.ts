export default class NavigationModel {
    private title: string;
    private slug: string;
    private active: boolean;
    private published: boolean;

    constructor() {
        this.title = '';
        this.slug = '';
        this.active = true;
        this.published = true;
    }
}