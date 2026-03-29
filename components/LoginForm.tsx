"use client"

import { useState } from "react"
import Link from "next/link"
import { LOGIN_FIELDS, LoginForm } from "@/@types/login.types"
import { FormField } from "./FormField"

const INITIAL_FORM: LoginForm = { credential: "", password: "" }

export const LoginFormCard = () => {
    const [form, setForm] = useState<LoginForm>(INITIAL_FORM)

    const setField = (key: keyof LoginForm) => (value: string) =>
        setForm((prev) => ({ ...prev, [key]: value }))

    const handleSubmit = () => {
        console.log(form)
    }

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm w-full space-y-4 container">
            <h2 className="text-xl font-bold">Tizimga kirish</h2>

            <div className="space-y-3">
                {LOGIN_FIELDS.map((field) => (
                    <FormField
                        key={field.name}
                        {...field}
                        value={form[field.name]}
                        onChange={setField(field.name)}
                    />
                ))}
            </div>

            <div className="flex justify-end">
                <Link
                    href="/forgot-password"
                    className="text-sm text-blue-500 hover:underline"
                >
                    Parol unutdingizmi?
                </Link>
            </div>

            <button
                onClick={handleSubmit}
                className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-black active:scale-95 transition-all"
            >
                Kirish
            </button>

            <p className="text-xs text-center text-gray-500">
                Tizimga kirish orqali quyidagilarga rozilik bildirasiz:{" "}
                <Link href="/privacy" className="text-blue-500 hover:underline">
                    Maxfiylik siyosati
                </Link>{" "}
                <Link href="/terms" className="text-blue-500 hover:underline">
                    Foydalanish shartlari
                </Link>
            </p>
        </div>
    )
}