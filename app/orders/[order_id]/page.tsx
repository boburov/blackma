"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "../../data/products";
import { SectionCard } from "@/components/SectionCard";
import {
  PAYMENT_METHODS,
  PaymentMethodId,
} from "@/@types/payment.method.types";
import { InfoRow } from "@/components/InfoRow";
import { PaymentMethodOption } from "@/components/PaymentMethon";

const ITEMS_PER_PAGE = 2;

const Page = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [selectedPayment, setSelectedPayment] =
    useState<PaymentMethodId>("payme");

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const paginatedProducts = products.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  return (
    <section className="p-4 space-y-4 pb-24 container">
      <div className="flex items-center justify-center relative">
        <ChevronLeft
          size={25}
          className="text-black cursor-pointer absolute left-0"
          onClick={() => router.back()}
        />
        <h1 className={`font-bold text-2xl text-center`}>Buyurtma</h1>
      </div>

      <SectionCard title="Ma'lumotlar">
        <InfoRow label="Holati" value="Tayyorlanmoqda" />
        <InfoRow label="Sanasi" value="12.12.2025" />
        <InfoRow label="Manzil" value="Uy - Chilonzor 23,30,39" />
      </SectionCard>

      <SectionCard>
        {paginatedProducts.map((product, index) => (
          <ProductCard
            key={index}
            imageSrc={product.image}
            imageAlt={product.name}
            productName={product.name}
            size={product.size}
            price={product.price}
            color={product.color}
          />
        ))}

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 pt-2">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="px-3 py-1 border border-slate-300 rounded disabled:opacity-50"
            >
              orqaga
            </button>
            <span className="text-sm px-2">
              {page} / {totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="px-3 py-1 border border-slate-300 rounded disabled:opacity-50"
            >
              keyingisi
            </button>
          </div>
        )}
      </SectionCard>
      <SectionCard title="To'lov ma'lumotlari">
        <InfoRow label="Umumiy" value="12 599 000 so'm" />
        <InfoRow
          label="Chegirma (-20%)"
          value="-450 000 so'm"
          highlight="red"
        />
        <InfoRow label="Yetkazib berish" value="45 000 so'm" />
        <span className="w-full flex border-b border-b-slate-300"></span>
        <div className="flex justify-between font-bold">
          <span>Jami summa</span>
          <span>12 194 000 so'm</span>
        </div>
      </SectionCard>

      <SectionCard title="To'lov usuli">
        {PAYMENT_METHODS.map((method) => (
          <PaymentMethodOption
            key={method.id}
            method={method}
            selected={selectedPayment === method.id}
            onSelect={() => setSelectedPayment(method.id)}
          />
        ))}
      </SectionCard>

      <div className="bg-white max-w-lg pt-2">
        <button className="w-full bg-black text-white font-semibold py-4 rounded-2xl active:scale-95 transition-transform">
          Biznes oldiga borish
        </button>
      </div>
    </section>
  );
};

export default Page;
