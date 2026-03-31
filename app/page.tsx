"use client";
import { useState, useMemo } from "react";
import { orders } from "./data/orders";
import Order from "@/components/Order";
import { calculateOrderPrice } from "./utils/order.price.calculator";
import useAuth from "./hooks/useAuth";
import { SlidersHorizontal } from "lucide-react";
import FilterModal from "@/components/FilterModal";

type FilterState = {
  sortBy: string;
  priceMin: string;
  priceMax: string;
  dateFrom: string;
  dateTo: string;
};

const defaultFilters: FilterState = {
  sortBy: "date_desc",
  priceMin: "",
  priceMax: "",
  dateFrom: "",
  dateTo: "",
};

const page = () => {
  useAuth();

  const [search, setSearch] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<FilterState>(defaultFilters);

  const activeFilterCount = [
    activeFilters.sortBy !== "date_desc",
    activeFilters.priceMin !== "",
    activeFilters.priceMax !== "",
    activeFilters.dateFrom !== "",
    activeFilters.dateTo !== "",
  ].filter(Boolean).length;

  const filteredOrders = useMemo(() => {
    let result = [...orders];

    // Search by orderId
    if (search.trim()) {
      result = result.filter((o) =>
        String(o.orderId).toLowerCase().includes(search.trim().toLowerCase())
      );
    }

    // Price filter
    if (activeFilters.priceMin !== "") {
      result = result.filter(
        (o) => calculateOrderPrice(o) >= Number(activeFilters.priceMin)
      );
    }
    if (activeFilters.priceMax !== "") {
      result = result.filter(
        (o) => calculateOrderPrice(o) <= Number(activeFilters.priceMax)
      );
    }

    // Date filter
    if (activeFilters.dateFrom) {
      const from = new Date(activeFilters.dateFrom).getTime();
      result = result.filter((o) => new Date(o.createdAt).getTime() >= from);
    }
    if (activeFilters.dateTo) {
      const to = new Date(activeFilters.dateTo).getTime() + 86400000; // include end day
      result = result.filter((o) => new Date(o.createdAt).getTime() <= to);
    }

    // Sort
    switch (activeFilters.sortBy) {
      case "date_desc":
        result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "date_asc":
        result.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        break;
      case "price_desc":
        result.sort(
          (a, b) => calculateOrderPrice(b) - calculateOrderPrice(a)
        );
        break;
      case "price_asc":
        result.sort(
          (a, b) => calculateOrderPrice(a) - calculateOrderPrice(b)
        );
        break;
    }

    return result;
  }, [orders, search, activeFilters]);

  return (
    <section className="container px-5">
      <center>
        <h1 className="font-bold text-2xl mt-5 mb-6">Buyurtmalarim</h1>
      </center>

      {/* Search + Filter Row */}
      <section className="flex h-8 items-center justify-between gap-x-2 mb-4">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-gray-100 rounded-lg px-5 py-3"
          placeholder="Buyurtma IDsi Bo'yicha Qidirish ..."
        />
        <button
          onClick={() => setIsFilterOpen(true)}
          className="relative bg-gray-200 h-12 w-14 p-1 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
        >
          <SlidersHorizontal className="inline-block" size={25} strokeWidth={1} />
          {activeFilterCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-blue-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
              {activeFilterCount}
            </span>
          )}
        </button>
      </section>

      {/* Active filter chips */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {activeFilters.sortBy !== "date_desc" && (
            <span className="text-xs bg-blue-50 text-blue-600 border border-blue-200 rounded-full px-3 py-1 font-medium">
              {{
                date_asc: "📅 Eng eski",
                price_desc: "💰 Narx ↓",
                price_asc: "💰 Narx ↑",
              }[activeFilters.sortBy] ?? ""}
            </span>
          )}
          {(activeFilters.priceMin || activeFilters.priceMax) && (
            <span className="text-xs bg-blue-50 text-blue-600 border border-blue-200 rounded-full px-3 py-1 font-medium">
              💵 {activeFilters.priceMin || "0"} — {activeFilters.priceMax || "∞"} so'm
            </span>
          )}
          {(activeFilters.dateFrom || activeFilters.dateTo) && (
            <span className="text-xs bg-blue-50 text-blue-600 border border-blue-200 rounded-full px-3 py-1 font-medium">
              📆 {activeFilters.dateFrom || "..."} → {activeFilters.dateTo || "..."}
            </span>
          )}
          <button
            onClick={() => setActiveFilters(defaultFilters)}
            className="text-xs text-gray-400 hover:text-red-400 px-2 py-1 rounded-full border border-gray-200 transition-colors"
          >
            Tozalash ✕
          </button>
        </div>
      )}

      {/* Results count */}
      <p className="text-xs text-gray-400 mb-3">
        {filteredOrders.length} ta buyurtma topildi
      </p>

      {/* Orders list */}
      <section className="flex flex-col w-full">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <Order
              key={order.orderId}
              orderId={order.orderId}
              createdAt={order.createdAt}
              orderPrice={calculateOrderPrice(order)}
            />
          ))
        ) : (
          <div className="text-center py-16 text-gray-400">
            <p className="text-4xl mb-3">🔍</p>
            <p className="font-medium text-gray-500">Buyurtma topilmadi</p>
            <p className="text-sm mt-1">Filter yoki qidiruvni o'zgartiring</p>
          </div>
        )}
      </section>

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApply={(filters) => setActiveFilters(filters)}
        initialFilters={activeFilters}
      />
    </section>
  );
};

export default page;