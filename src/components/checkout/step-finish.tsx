import { useCheckoutStore } from "@/stores/checkoutStore";
import { Button } from "../ui/button";
import Link from "next/link";
import { generateMessage } from "@/lib/generate-message";

export const StepFinish = () => {
  const { name } = useCheckoutStore((store) => store);

  const message = generateMessage();
  const linkZap = `https://wa.me//${
    process.env.NEXT_PUBLIC_ZAP
  }?text=${encodeURI(message)}`;
  return (
    <div className="text-center flex flex-col gap-5">
      <p>
        Perfeito <strong>{name}</strong>!
      </p>
      <p>
        Agora envie seu pedido ao nosso whatsapp para concluir.Nosso atendente
        ira te guiar sobre o atendimento do pedido
      </p>
      <Button>
        <Link target="_blank" href={linkZap}>
          Enviar para o Whatsapp
        </Link>
      </Button>
    </div>
  );
};
