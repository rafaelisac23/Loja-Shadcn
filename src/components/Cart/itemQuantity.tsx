import { useCartStore } from "@/stores/cart_store";
import { Cart } from "@/types/Cart";
import { stat } from "fs";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

type Props = {
  cartItem: Cart;
};

export const CartItemQuantity = ({ cartItem }: Props) => {
  const { upsertCartItem } = useCartStore((state) => state);

  const handlePlusButton = () => {
    upsertCartItem(cartItem.product, 1);
  };

  const handleMinusButton = () => {
    upsertCartItem(cartItem.product, -1);
  };
  return (
    <div className="flex items-center gap-2">
      <Button
        variant={"outline"}
        size={"icon"}
        className="size-6"
        onClick={handlePlusButton}
      >
        <PlusIcon className="size-3" />
      </Button>
      <div className="text-xs">{cartItem.quantity}</div>
      <Button
        variant={"outline"}
        size={"icon"}
        className="size-6"
        onClick={handleMinusButton}
      >
        <MinusIcon className="size-3" />
      </Button>
    </div>
  );
};
