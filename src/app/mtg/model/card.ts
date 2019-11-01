export class Card {

  // missing legalities
  constructor(
    public id: string,
    public name: string,
    public lang: string,
    public imageUris: string[],
    manaCost: string,
    public cmc: number,
    colors: string[],
    rarity: string
  ) {}
}
