export class Price {

  public usd: number;
  public euro: number;
  public tix: number;

  constructor(obj?: any) {
    this.usd = obj.usd;
    this.euro = obj.eur;
    this.tix = obj.tix;
  }
}
