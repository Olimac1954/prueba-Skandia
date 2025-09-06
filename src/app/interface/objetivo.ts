export interface Card {//interface para definir la estructura de un objetivo y consumier la API
  nameProduct: string;
  numberProduct: string;
  balanceProduct: string;
  detaildProduct: string;
}
export interface ApiResponse {
  listCard: Card[];
}