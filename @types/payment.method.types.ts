import payme from "../assets/icons/payme.png"
import click from "../assets/icons/click.png"
import { StaticImageData } from "next/image"

// ─── Types ────────────────────────────────────────────────────────────────────

type IconMethod = {
    id: string
    label: string
    icon: StaticImageData
}

type EmojiMethod = {
    id: string
    label: string
    emoji: string
}

export type PaymentMethod = IconMethod | EmojiMethod

export type PaymentMethodId = (typeof PAYMENT_METHODS)[number]["id"]

// ─── Helper ───────────────────────────────────────────────────────────────────

export const isEmojiMethod = (method: PaymentMethod): method is EmojiMethod =>
    "emoji" in method

// ─── Data ─────────────────────────────────────────────────────────────────────

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
        emoji: "💵",
    },
] as const satisfies readonly PaymentMethod[]