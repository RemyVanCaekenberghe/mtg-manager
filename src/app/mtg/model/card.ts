import { Image } from './image';
export class Card {

  // missing legalities
  constructor(
    public id: string,
    public name: string,
    public lang: string,
    public image_uris: Image,
    manaCost: string,
    public cmc: number,
    colors: string[],
    rarity: string
  ) {}
}
