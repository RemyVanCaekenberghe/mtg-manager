import { Image } from './image';
export class Card {

  public static SYMBOL_IDENTIFIER = /(\{[^\}]+\})/g;

  // missing legalities
  public id: string;
  public name: string;
  public type_line: string;
  public oracle_text: string;
  public lang: string;
  public image_uris: Image;
  public mana_cost: string;
  public card_faces: Array<Card>;
  public cmc: number;
  public colors: string[];
  public rarity: string;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }

  public getManaCosts(): string[] {
    return this.mana_cost.split(Card.SYMBOL_IDENTIFIER).filter(Boolean);
  }

  public getOracleTextDivided(): Array<string> {
    return this.oracle_text.split(Card.SYMBOL_IDENTIFIER);
  }

  public getCardFaces(): Array<Card> {
    const faces = new Array<Card>();
    for (const face of this.card_faces) {
      faces.push(new Card(face));
    }

    return faces;
  }
}
