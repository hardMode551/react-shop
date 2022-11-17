export type TypeCartItem = {
  id: string;
  title: string;
  price: number;
  count: number;
  imageUrl: string;
}

export interface cartSliceState {
  totalPrice: number;
  items: TypeCartItem[];
}