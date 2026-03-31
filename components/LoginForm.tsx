"use client";

import { useState } from "react";
import Link from "next/link";
import { LOGIN_FIELDS, LoginForm } from "@/@types/login.types";
import { FormField } from "./FormField";
import { useRouter } from "next/navigation";
import useTranslate from "@/app/hooks/useTranslate";

const INITIAL_FORM: LoginForm = { credential: "", password: "" };

export const LoginFormCard = () => {
  const { t } = useTranslate();
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
      setError(t("auth.fill_all_fields"));
      return;
    }

    if (!emailRegex.test(mail)) {
      setError(t("auth.invalid_email"));
      return;
    }

    if (password.length < 6) {
      setError(t("auth.password_min_length"));
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
      setError(t("auth.invalid_credentials"));
    }
  };
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm w-full space-y-4 max-w-lg">
      <h2 className="text-xl font-bold">{t("auth.login_title")}</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="space-y-3">
        {msg === true && (
          <span className="text-green-500">
            {t("auth.credentials_correct")}
          </span>
        )}

        {msg === false && (
          <span className="text-red-500">
            {t("auth.credentials_incorrect")}
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
            {t("auth.forgot_password")}
          </Link>
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-black active:scale-95 transition-all"
        >
          {t("auth.login_button")}
        </button>
      </form>


      <p className="text-xs text-center text-gray-500">
        {t("auth.login_agreement")}{" "}
        <Link href="/privacy" className="text-blue-500 hover:underline">
          {t("auth.privacy_policy")}
        </Link>{" "}
        <Link href="/terms" className="text-blue-500 hover:underline">
          {t("auth.terms_of_use")}
        </Link>
      </p>
    </div >
  );
};
