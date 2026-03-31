"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "../../data/products";
import { SectionCard } from "@/components/SectionCard";
import { PAYMENT_METHODS, PaymentMethodId } from "@/@types/payment.method.types";
import { InfoRow } from "@/components/InfoRow";
import { PaymentMethodOption } from "@/components/PaymentMethonOption";
import useAuth from "@/app/hooks/useAuth";
import useTranslate from "@/app/hooks/useTranslate";

const ITEMS_PER_PAGE = 2;

const Page = () => {
  const router = useRouter();
  const { t } = useTranslate();
  const [page, setPage] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethodId>("payme");

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const paginatedProducts = products.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  useAuth();

  return (
    <section className="p-4 space-y-4 pb-24 container">
      <div className="flex items-center justify-center relative">
        <ChevronLeft
          size={25}
          className="text-black cursor-pointer absolute left-0"
          onClick={() => router.back()}
        />
        <h1 className="font-bold text-2xl text-center">{t("order.title")}</h1>
      </div>

      <SectionCard title={t("order.details")}>
        <InfoRow label={t("order.status")} value={t("order.status_value")} />
        <InfoRow label={t("order.date")} value="12.12.2025" />
        <InfoRow label={t("order.address")} value="Uy - Chilonzor 23,30,39" />
      </SectionCard>

      <section className="bg-white rounded-[20px] px-[14px] py-[5px] pb-4 border-slate-300 border space-y-3">
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
              {t("order.prev")}
            </button>
            <span className="text-sm px-2 w-20 flex items-center justify-center">
              {page} / {totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="px-3 py-1 border border-slate-300 rounded disabled:opacity-50"
            >
              {t("order.next")}
            </button>
          </div>
        )}
      </section>

      <SectionCard title={t("order.payment_details")}>
        <InfoRow label={t("order.total")} value="12 599 000" />
        <InfoRow label={t("order.discount")} value="-450 000" highlight="red" />
        <InfoRow label={t("order.delivery")} value="45 000" />
        <span className="w-full flex border-b border-b-slate-300" />
        <div className="flex justify-between font-bold">
          <span>{t("order.grand_total")}</span>
          <span>12 194 000 {t("orders.sum")}</span>
        </div>
      </SectionCard>

      <SectionCard title={t("order.payment_method")}>
        {PAYMENT_METHODS.map((method) => (
          <PaymentMethodOption
            key={method.id}
            method={method}
            selected={selectedPayment === method.id}
            onSelect={() => setSelectedPayment(method.id)}
          />
        ))}
      </SectionCard>

      <div className="bg-white pt-2">
        <button className="w-full bg-black text-white font-semibold py-4 rounded-2xl active:scale-95 transition-transform">
          {t("order.go_to_business")}
        </button>
      </div>
    </section>
  );
};

export default Page;