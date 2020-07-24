export class PurchaseUri {

  public tcgPlayer: string;
  public cardmarket: string;

  constructor(purchaseUris?: any) {
    this.tcgPlayer = purchaseUris.tcgplayer;
    this.cardmarket = purchaseUris.cardmarket;
  }
}
