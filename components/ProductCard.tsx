import Image, { StaticImageData } from "next/image";
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
    className: "bg-orange-50 text-orange-700",
  },
  shipped: {
    label: "Yuborildi",
    icon: Truck,
    className: "bg-blue-50 text-blue-700",
  },
  delivered: {
    label: "Yetkazildi",
    icon: CheckCircle,
    className: "bg-green-50 text-green-700",
  },
  cancelled: {
    label: "Bekor qilindi",
    icon: XCircle,
    className: "bg-red-50 text-red-700",
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
    <article className="flex items-center gap-3 p-3 rounded-2xl border bg-white hover:shadow-md transition w-full">
      {/* Image */}
      <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-100 shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt || productName}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 min-w-0 gap-1.5">
        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-900 truncate">
          {productName}
        </h3>

        {/* Meta */}
        <div className="flex flex-wrap gap-1.5">
          <Badge icon={<Ruler size={12} />} text={size} />

          <Badge
            icon={<Palette size={12} />}
            text={color}
            extra={
              <span
                className="w-2.5 h-2.5 rounded-full border border-black/10"
                style={{ background: color.startsWith("#") ? color : "#888" }}
              />
            }
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-1">
          {/* Price */}
          <div className="flex items-center gap-1">
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
            <span
              className={`flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${st.className}`}
            >
              <StatusIcon size={11} />
              {st.label}
            </span>
          )}
        </div>
      </div>

      {/* Remove */}
      {onRemove && (
        <button
          onClick={onRemove}
          aria-label="Mahsulotni o'chirish"
          className="text-gray-400 hover:text-red-500 transition p-1 rounded-lg"
        >
          <XCircle size={18} />
        </button>
      )}
    </article>
  );
}
