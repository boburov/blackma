"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, KeyRound, Lock, ArrowLeft, CheckCircle } from "lucide-react";
import useTranslate from "@/app/hooks/useTranslate";

type Step = "email" | "code" | "newPassword" | "success";

const ForgotPasswordCard = () => {
    const { t } = useTranslate();
    const [step, setStep] = useState<Step>("email");
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleEmailSubmit = () => {
        setError(null);
        if (!email.trim()) {
            setError(t("forgot.fill_email"));
            return;
        }
        if (!emailRegex.test(email.trim())) {
            setError(t("forgot.invalid_email"));
            return;
        }
        setStep("code");
    };

    const handleCodeSubmit = () => {
        setError(null);
        if (!code.trim()) {
            setError(t("forgot.fill_code"));
            return;
        }
        if (code.trim().length < 4) {
            setError(t("forgot.invalid_code"));
            return;
        }
        setStep("newPassword");
    };

    const handlePasswordSubmit = () => {
        setError(null);
        if (!newPassword.trim() || !confirmPassword.trim()) {
            setError(t("forgot.fill_passwords"));
            return;
        }
        if (newPassword.length < 6) {
            setError(t("forgot.password_min_length"));
            return;
        }
        if (newPassword !== confirmPassword) {
            setError(t("forgot.passwords_mismatch"));
            return;
        }
        setStep("success");
    };

    const stepNumber = step === "email" ? 1 : step === "code" ? 2 : step === "newPassword" ? 3 : 4;

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm w-full space-y-5 max-w-lg mx-auto max-h-screen">

            {/* Header */}
            <div className="flex items-center gap-3">
                {step !== "email" && step !== "success" && (
                    <button
                        type="button"
                        onClick={() => {
                            setError(null);
                            setStep(step === "code" ? "email" : "code");
                        }}
                        className="text-gray-400 hover:text-gray-700 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                )}
                <h2 className="text-xl font-bold">{t("forgot.title")}</h2>
            </div>

            {/* Step indicators */}
            {step !== "success" && (
                <div className="flex items-center gap-2">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center gap-2">
                            <div
                                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${s < stepNumber
                                    ? "bg-green-500 text-white"
                                    : s === stepNumber
                                        ? "bg-gray-900 text-white"
                                        : "bg-gray-100 text-gray-400"
                                    }`}
                            >
                                {s < stepNumber ? "✓" : s}
                            </div>
                            {s < 3 && (
                                <div
                                    className={`flex-1 h-0.5 w-8 transition-colors ${s < stepNumber ? "bg-green-500" : "bg-gray-100"
                                        }`}
                                />
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Error */}
            {error && <span className="block text-red-500 text-sm">{error}</span>}

            {/* Step 1 — Email */}
            {step === "email" && (
                <div className="space-y-4">
                    <p className="text-sm text-gray-500">{t("forgot.email_desc")}</p>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm text-gray-600">{t("forgot.email_label")}</label>
                        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 bg-white focus-within:border-gray-400 transition-colors">
                            <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                            <input
                                type="email"
                                placeholder={t("forgot.email_placeholder")}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 text-sm bg-transparent outline-none placeholder:text-gray-400"
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={handleEmailSubmit}
                        className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-black active:scale-95 transition-all"
                    >
                        {t("forgot.send_code_button")}
                    </button>
                    <p className="text-center text-sm text-gray-500">
                        {t("forgot.back_to_login")}{" "}
                        <Link href="/login" className="text-blue-500 hover:underline">
                            {t("forgot.login_link")}
                        </Link>
                    </p>
                </div>
            )}

            {/* Step 2 — Code */}
            {step === "code" && (
                <div className="space-y-4">
                    <p className="text-sm text-gray-500">
                        {t("forgot.code_desc")} <span className="font-medium text-gray-700">{email}</span>
                    </p>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm text-gray-600">{t("forgot.code_label")}</label>
                        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 bg-white focus-within:border-gray-400 transition-colors">
                            <KeyRound className="w-4 h-4 text-gray-400 shrink-0" />
                            <input
                                type="text"
                                placeholder={t("forgot.code_placeholder")}
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                maxLength={6}
                                className="flex-1 text-sm bg-transparent outline-none placeholder:text-gray-400 tracking-widest"
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={handleCodeSubmit}
                        className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-black active:scale-95 transition-all"
                    >
                        {t("forgot.verify_button")}
                    </button>
                    <p className="text-center text-sm text-gray-500">
                        {t("forgot.resend_desc")}{" "}
                        <button
                            type="button"
                            onClick={() => setStep("email")}
                            className="text-blue-500 hover:underline"
                        >
                            {t("forgot.resend_link")}
                        </button>
                    </p>
                </div>
            )}

            {/* Step 3 — New Password */}
            {step === "newPassword" && (
                <div className="space-y-4">
                    <p className="text-sm text-gray-500">{t("forgot.new_password_desc")}</p>

                    {/* New password */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm text-gray-600">{t("forgot.new_password_label")}</label>
                        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 bg-white focus-within:border-gray-400 transition-colors">
                            <Lock className="w-4 h-4 text-gray-400 shrink-0" />
                            <input
                                type={showNewPassword ? "text" : "password"}
                                placeholder={t("forgot.new_password_placeholder")}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="flex-1 text-sm bg-transparent outline-none placeholder:text-gray-400"
                            />
                            <button
                                type="button"
                                onClick={() => setShowNewPassword((v) => !v)}
                                className="text-gray-400 hover:text-gray-600 text-xs"
                            >
                                {showNewPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    {/* Confirm password */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm text-gray-600">{t("forgot.confirm_password_label")}</label>
                        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 bg-white focus-within:border-gray-400 transition-colors">
                            <Lock className="w-4 h-4 text-gray-400 shrink-0" />
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder={t("forgot.confirm_password_placeholder")}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="flex-1 text-sm bg-transparent outline-none placeholder:text-gray-400"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword((v) => !v)}
                                className="text-gray-400 hover:text-gray-600 text-xs"
                            >
                                {showConfirmPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handlePasswordSubmit}
                        className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-black active:scale-95 transition-all"
                    >
                        {t("forgot.reset_button")}
                    </button>
                </div>
            )}

            {/* Step 4 — Success */}
            {step === "success" && (
                <div className="flex flex-col items-center gap-4 py-4">
                    <CheckCircle className="w-14 h-14 text-green-500" />
                    <h3 className="text-lg font-bold text-center">{t("forgot.success_title")}</h3>
                    <p className="text-sm text-gray-500 text-center">{t("forgot.success_desc")}</p>
                    <Link
                        href="/login"
                        className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-black active:scale-95 transition-all text-center"
                    >
                        {t("forgot.go_to_login")}
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ForgotPasswordCard