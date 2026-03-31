import { PaymentMethod } from "@/@types/payment.method.types";
import Image from "next/image";

type Props = {
  method: PaymentMethod;
  selected: boolean;
  onSelect: () => void;
};


export function PaymentMethodOption({ method, selected, onSelect }: Props) {
  return (
    <button
      onClick={onSelect}
      className={`w-full h-20 flex items-center justify-between px-4 py-6 rounded-xl border-2 transition-colors Montserrat_Regular ${selected
        ? "border-black "
        : "border-[#F4F4F4] bg-[#F8F8F8]"
        }`}
    >
      <div className="flex items-center gap-3 justify-between w-full">
        <Image
          src={method.icon}
          alt={method.label}
          className="w-20 h-10 object-contain object-left"
        />
        <span className="text-[15px] font-medium text-[#6E7179] line-through decoration-1">
          {method.label}
        </span>
      </div>
    </button>
  )
}