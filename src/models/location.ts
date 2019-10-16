export default class LocationModel {
  private id: number;
  private label: string;
  private slug: string;
  private url: string;
  private published: boolean;

  constructor() {
    this.id = 0;
    this.label = '';
    this.slug = '';
    this.url = '';
    this.published = true;
  }
}
