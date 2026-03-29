import { StaticImageData } from "next/image"

export interface ProductCardProps {
  imageSrc: StaticImageData
  imageAlt?: string
  productName: string
  size: string
  color: string
  price?: number
  quantity?: number
  status?: "pending" | "shipped" | "delivered" | "cancelled"
  onRemove?: () => void
}