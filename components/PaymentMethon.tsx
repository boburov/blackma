import Image from "next/image";
import { isEmojiMethod, PaymentMethod } from "@/@types/payment.method.types";

// ─── Props ────────────────────────────────────────────────────────────────────

type Props = {
  method: PaymentMethod;
  selected: boolean;
  onSelect: () => void;
};

// ─── Component ────────────────────────────────────────────────────────────────

export function PaymentMethodOption({ method, selected, onSelect }: Props) {
  return (
    <button
      onClick={onSelect}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-colors ${
        selected
          ? "border-black bg-gray-50"
          : "border-gray-200 bg-white hover:border-gray-300"
      }`}
    >
      {/* Left: icon + label */}
      <div className="flex items-center gap-3">
        {isEmojiMethod(method) ? (
          <span className="text-xl">{method.emoji}</span>
        ) : (
          <Image
            src={method.icon}
            alt={method.label}
            height={24}
            style={{ width: "auto" }}
          />
        )}
        <span className="text-sm font-medium">{method.label}</span>
      </div>

      {/* Right: radio indicator */}
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
          selected ? "border-black" : "border-gray-300"
        }`}
      >
        {selected && <div className="w-2.5 h-2.5 rounded-full bg-black" />}
      </div>
    </button>
  );
}
