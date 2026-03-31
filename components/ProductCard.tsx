import Image from "next/image";
import {
  Ruler,
  Palette,
  Clock,
  Truck,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Badge } from "./Badge";
import { ProductCardProps } from "@/@types/product_card_type";

const statusConfig = {
  pending: {
    label: "Kutilmoqda",
    icon: Clock,
    className: "bg-orange-50 text-orange-600",
  },
  shipped: {
    label: "Yuborildi",
    icon: Truck,
    className: "bg-blue-50 text-blue-600",
  },
  delivered: {
    label: "Yetkazildi",
    icon: CheckCircle,
    className: "bg-green-50 text-green-600",
  },
  cancelled: {
    label: "Bekor qilindi",
    icon: XCircle,
    className: "bg-red-50 text-red-600",
  },
};

export default function ProductCard({
  imageSrc,
  imageAlt,
  productName,
  size,
  color,
  price,
  quantity = 1,
  status,
  onRemove,
}: ProductCardProps) {
  const st = status ? statusConfig[status] : null;
  const StatusIcon = st?.icon;

  return (
    <article className="flex gap-3 w-full py-3 border-b border-slate-200">
      {/* Image */}
      <div className="relative w-[99px] h-[99px] rounded-xl overflow-hidden bg-gray-100 shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt || productName}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 min-w-0 justify-between">
        {/* Top */}
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-tight">
            {productName}
          </h3>

          {onRemove && (
            <button
              onClick={onRemove}
              className="text-gray-400 hover:text-red-500 transition"
            >
              <XCircle size={18} />
            </button>
          )}
        </div>

        {/* Meta */}
        <div className="flex gap-0 mt-1  flex-wrap flex-col">
          <section>
            <span className="text-sm">Size :</span>  <Badge icon={<Ruler size={12} />} text={size} />
          </section>

          <section>
            <span className="text-sm">Color :</span><Badge
              icon={<Palette size={12} />}
              text={color}
            />
          </section>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-2">
          {/* Price */}
          <div className="flex items-baseline gap-1">
            {price !== undefined && (
              <span className="text-sm font-bold text-gray-900">
                {(price * quantity).toLocaleString()} so'm
              </span>
            )}
            {quantity > 1 && (
              <span className="text-xs text-gray-400">×{quantity}</span>
            )}
          </div>

          {/* Status */}
          {st && StatusIcon && (
            <div
              className={`flex items-center gap-1 text-[11px] font-medium px-2 py-[2px] rounded-full ${st.className}`}
            >
              <StatusIcon size={12} />
              {st.label}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}