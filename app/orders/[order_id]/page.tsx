"use client"

import ProductCard from "@/components/ProductCard"
import { products } from "../../data/products"
import { inter } from "./layout"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const Page = () => {
    const router = useRouter()

    return (
        <section>
            <div className="flex items-center justify-center my-5 relative">

                <ChevronLeft
                    size={25}
                    className="text-black cursor-pointer absolute left-0"
                    onClick={() => router.back()}
                />

                <h1 className={`font-bold text-2xl w-full text-center ${inter.className}`}>
                    Buyurtma
                </h1>
            </div>

            <section className={`${inter.className} text-black flex flex-col gap-y-3`}>
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        imageSrc={product.image}
                        productName={product.name}
                        size={product.size}
                        imageAlt={product.name}
                        price={product.price}
                        color={product.color}
                    />
                ))}
            </section>
        </section>
    )
}

export default Page