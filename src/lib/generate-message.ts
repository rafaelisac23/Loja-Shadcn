import { useCartStore } from "@/stores/cart_store";
import { useCheckoutStore } from "@/stores/checkoutStore";

export const generateMessage = () => {
  const { name, address } = useCheckoutStore((state) => state);
  const { cart } = useCartStore((state) => state);

  let OrderProducts = [];
  for (let item of cart) {
    OrderProducts.push(`${item.quantity}x ${item.product.name}`);
  }

  return `**Dados do cliente**
  Nome:${name}
  Endereço:${address.street},${address.number} (${address.complement})
  ${address.district},${address.city}/${address.state}
  ------
  **Pedido**
  ${OrderProducts.join("\n")}`;
};
