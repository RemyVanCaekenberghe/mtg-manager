export class Set {

  public code: string;
  public name: string;
  public releasedAt: Date;
  public iconSvgUri: string;
  public setType: string;

  constructor(obj?: any) {
    this.code = obj.code;
    this.name = obj.name;
    this.releasedAt = obj.released_at;
    this.iconSvgUri = obj.icon_svg_uri;
    this.setType = obj.set_type;
  }
}
