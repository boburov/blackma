"use client";

import { useState } from "react";
import Link from "next/link";
import { LOGIN_FIELDS, LoginForm } from "@/@types/login.types";
import { FormField } from "./FormField";
import { useRouter } from "next/navigation";

const INITIAL_FORM: LoginForm = { credential: "", password: "" };

export const LoginFormCard = () => {
  const [form, setForm] = useState<LoginForm>(INITIAL_FORM);
  const router = useRouter()
  const [msg, setMsg] = useState<null | boolean>(null);
  const [error, setError] = useState<string | null>(null);

  const setField = (key: keyof LoginForm) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = () => {
    const mail = form.credential.trim();
    const password = form.password.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // reset
    setError(null);
    setMsg(null);

    if (!mail || !password) {
      setError("Barcha maydonlarni to‘ldiring");
      return;
    }

    if (!emailRegex.test(mail)) {
      setError("Email noto‘g‘ri formatda");
      return;
    }

    if (password.length < 6) {
      setError("Parol kamida 6 ta belgidan iborat bo‘lishi kerak");
      return;
    }

    const isAuthenticated =
      mail === "blackma@gmail.com" &&
      password === "blackma.strong.password";

    if (isAuthenticated) {
      localStorage.setItem("mail", mail);
      localStorage.setItem("password", password);

      setMsg(true);
      setError(null);

      setTimeout(() => {
        router.push("/");
      }, 500);
    } else {
      setMsg(false);
      setError("Email yoki parol noto‘g‘ri");
    }
  };
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm w-full space-y-4 max-w-lg">
      <h2 className="text-xl font-bold">Tizimga kirish</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="space-y-3">
        {msg === true && (
          <span className="text-green-500">
            Parol va Email To'g'ri
          </span>
        )}

        {msg === false && (
          <span className="text-red-500">
            Parol va Email Noto'g'ri
          </span>
        )}

        {error && (
          <span className="text-red-500">{error}</span>
        )}

        {LOGIN_FIELDS.map((field) => (
          <FormField
            key={field.name}
            {...field}
            placeholder={field.placeholder}
            type={field.type}
            value={String(form[field.name])}
            onChange={setField(field.name)}
          />
        ))}

        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-sm text-blue-500 hover:underline"
          >
            Parol unutdingizmi?
          </Link>
        </div>
        <button
          type="button"
          className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-black active:scale-95 transition-all"
        >
          Kirish
        </button>
      </form>


      <p className="text-xs text-center text-gray-500">
        Tizimga kirish orqali quyidagilarga rozilik bildirasiz:{" "}
        <Link href="/privacy" className="text-blue-500 hover:underline">
          Maxfiylik siyosati
        </Link>{" "}
        <Link href="/terms" className="text-blue-500 hover:underline">
          Foydalanish shartlari
        </Link>
      </p>
    </div >
  );
};
