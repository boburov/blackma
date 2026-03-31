import payme from "../assets/icons/payme.svg"
import click from "../assets/icons/click.svg"
import money from "../assets/icons/money.svg"
import { StaticImageData } from "next/image"

// ─── Types ────────────────────────────────────────────────────────────────────

type IconMethod = {
    id: string
    label: string
    icon: StaticImageData
}


export type PaymentMethod = IconMethod 

export type PaymentMethodId = (typeof PAYMENT_METHODS)[number]["id"]

export const PAYMENT_METHODS = [
    {
        id: "payme",
        label: "Payme",
        icon: payme,
    },
    {
        id: "click",
        label: "Click",
        icon: click,
    },
    {
        id: "cash",
        label: "Naqd pul",
        icon: money,
    },
] as const satisfies readonly PaymentMethod[]