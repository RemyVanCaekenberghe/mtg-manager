export class PurchaseUri {

  public tcgPlayer: string;
  public cardmarket: string;
  public cardhoarder: string;

  constructor(purchaseUris?: any) {
    this.tcgPlayer = purchaseUris.tcgplayer;
    this.cardmarket = purchaseUris.cardmarket;
    this.cardhoarder = purchaseUris.cardhoarder;
  }
}
