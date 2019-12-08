import { Image } from './image';
export class Card {
  // missing legalities
  public id: string;
  public name: string;
  public type_line: string;
  public oracle_text: string;
  public lang: string;
  public image_uris: Image;
  public mana_cost: string;
  public cmc: number;
  public colors: string[];
  public rarity: string;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }

  public getManaCosts(): string[] {
    return this.mana_cost.split(/(\{.\})/).filter(Boolean);
  }
}
