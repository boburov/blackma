"use client"

import { useState } from "react"
import { PAYMENT_METHODS } from "@/@types/payment.method.types"
import { PaymentMethodOption } from "./PaymentMethonOption"

export default function PaymentMethods() {
  const [selected, setSelected] = useState<string>("payme")

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">To‘lov usuli</h2>

      {/* Payme */}
      <PaymentMethodOption
        method={PAYMENT_METHODS[0]}
        selected={selected === "payme"}
        onSelect={() => setSelected("payme")}
      />

      {/* Click */}
      <PaymentMethodOption
        method={PAYMENT_METHODS[1]}
        selected={selected === "click"}
        onSelect={() => setSelected("click")}
      />

      {/* Cash */}
      <PaymentMethodOption
        method={PAYMENT_METHODS[2]}
        selected={selected === "cash"}
        onSelect={() => setSelected("cash")}
      />
    </div>
  )
}