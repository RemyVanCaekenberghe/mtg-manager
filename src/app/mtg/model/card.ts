import { Image } from './image';
export class Card {

  // missing legalities
  constructor(
    public id: string,
    public name: string,
    public lang: string,
    public image_uris: Image,
    public manaCost: string,
    public cmc: number,
    public colors: string[],
    public rarity: string
  ) {}
}
