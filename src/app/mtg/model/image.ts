export class Image {
  public small: string;
  public normal: string;
  public large: string;
  public png: string;
  public artCrop: string;
  public borderCrop: string;

  constructor(obj?: any) {
    this.small = obj.small;
    this.normal = obj.normal;
    this.large = obj.large;
    this.png = obj.png;
    this.artCrop = obj.art_crop;
    this.borderCrop = obj.border_crop;
  }
}
