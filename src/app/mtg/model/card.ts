import { Image } from "./image";
import { Legality } from "./legality";
import { Price } from './price';
import { PurchaseUri } from './purchaseUri';
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
  public legalities: Legality;
  public prices: Price;
  public purchaseUris: PurchaseUri;
  public artist: string;

  constructor(obj?: any) {
    this.id = obj.id;
    this.name = obj.name;
    this.typeLine = obj.type_line;
    this.oracleText = obj.oracle_text;
    this.lang = obj.lang;
    this.manaCost = obj.mana_cost;
    this.cmc = obj.cmc;
    this.colors = obj.colors;
    this.rarity = obj.rarity;
    this.artist = obj.artist;

    if (obj.image_uris != null) {
      this.imageUris = new Image(obj.image_uris);
    }

    if (obj.card_faces != null) {
      this.cardFaces = new Array();
      for (const face of obj.card_faces) {
        this.cardFaces.push(new Card(face));
      }
    }

    if (obj.prices != null) {
      this.prices = new Price(obj.prices);
    }
    if (obj.purchase_uris != null) {
      this.purchaseUris = new PurchaseUri(obj.purchase_uris);
    }

    if(obj.legalities != null) {
      this.legalities = new Legality(obj.legalities);
    }
  }

  public getManaCosts(): string[] {
    return this.manaCost.split(Card.SYMBOL_IDENTIFIER).filter(Boolean);
  }

  public getOracleTextDivided(): Array<string> {
    return this.oracleText.split(Card.SYMBOL_IDENTIFIER);
  }
}
