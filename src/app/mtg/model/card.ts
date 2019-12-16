import { Image } from "./image";
import { Legality } from "./legality";
export class Card {
  public static SYMBOL_IDENTIFIER = /(\{[^\}]+\})/g;

  public id: string;
  public name: string;
  public typeLine: string;
  public oracleText: string;
  public lang: string;
  public imageUris: Image;
  public manaCost: string;
  public cardFaces: Array<Card>;
  public cmc: number;
  public colors: string[];
  public rarity: string;
  public legalities: Map<string, Legality>;

  constructor(obj?: any) {
    this.id = obj.id;
    this.name = obj.name;
    this.typeLine = obj.type_line;
    this.oracleText = obj.oracle_text;
    this.lang = obj.lang;
    if (obj.image_uris != null) {
      this.imageUris = new Image(obj.image_uris);
    }
    this.manaCost = obj.mana_cost;

    if (obj.card_faces != null) {
      this.cardFaces = new Array();
      for (const face of obj.card_faces) {
        this.cardFaces.push(new Card(face));
      }
    }

    this.cmc = obj.cmc;
    this.colors = obj.colors;
    this.rarity = obj.rarity;
  }

  public getManaCosts(): string[] {
    return this.manaCost.split(Card.SYMBOL_IDENTIFIER).filter(Boolean);
  }

  public getOracleTextDivided(): Array<string> {
    return this.oracleText.split(Card.SYMBOL_IDENTIFIER);
  }

  public getCardFaces(): Array<Card> {
    const faces = new Array<Card>();
    for (const face of this.cardFaces) {
      faces.push(new Card(face));
    }

    return faces;
  }
}
