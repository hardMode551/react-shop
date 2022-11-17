import { RootState } from "../../Store";

export const selectCart = (state: RootState) => state.cart;

export const selectCartItemById = (id: string | number) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);