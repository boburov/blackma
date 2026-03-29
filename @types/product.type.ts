import { StaticImageData } from "next/image";

export interface Product {
  image: StaticImageData;
  name: string;
  color: string;
  price: number;
  size: string;
}
