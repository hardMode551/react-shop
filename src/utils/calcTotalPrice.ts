import { TypeCartItem } from "../Redux/Slices/cart/types";


export const calcTotalPrice = (items: TypeCartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
