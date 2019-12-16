export class Legality {

  private static LEGAL = 'legal';
  private static RESTRICTED = 'restricted';

  public standard: string;
  public pioneer: string;
  public modern: string;
  public legacy: string;
  public commander: string;
  public brawl: string;

  constructor(legalities?: any) {
    this.standard = legalities.standard;
    this.pioneer = legalities.pioneer;
    this.modern = legalities.modern;
    this.legacy = legalities.legacy;
    this.commander = legalities.commander;
    this.brawl = legalities.brawl;
  }
}
