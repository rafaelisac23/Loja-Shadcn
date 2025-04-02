"use client";

import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

type Props = {
  item: Product;
};

export const ProductItem = ({ item }: Props) => {
  const { toast } = useToast();
  const handleAddButton = () => {
    //TODO: adcionar o item no storage
    toast({
      title: "Adcionado ao carrinho",
      description: item.name,
      action: <ToastAction altText="fechar">Fechar</ToastAction>,
    });
  };
  return (
    <div>
      <div className=" rounded-md overflow-hidden">
        <img src={item.image} alt={item.name} className="h-32 object-cover" />
      </div>
      <div>
        <div className="mt-3 flex flex-col gap-2">
          <p className="text-lg">{item.name}</p>
          <p className="text-sm opacity-50">R$ {item.price.toFixed(2)}</p>
          <Button variant={"outline"} onClick={handleAddButton}>
            Adcionar
          </Button>
        </div>
      </div>
    </div>
  );
};
