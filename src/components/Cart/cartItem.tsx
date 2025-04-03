import { Cart } from "@/types/Cart";
import { CartItemQuantity } from "./itemQuantity";

type Props = {
  item: Cart;
};

export const CartItem = ({ item }: Props) => {
  return (
    <div className="flex items-center gap-5">
      <div className="w-16 overflow-hidden">
        <img
          src={item.product.image}
          alt=""
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-base">{item.product.name}</p>
        <p className="text-xs opacity-50">{item.product.price.toFixed(2)}</p>
      </div>
      <div>
        <CartItemQuantity cartItem={item} />
      </div>
    </div>
  );
};
