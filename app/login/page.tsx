"use client"
import { LoginFormCard } from "@/components/LoginForm"
import useTranslate from "@/app/hooks/useTranslate"

const LoginPage = () => {
    const { t } = useTranslate()
    return (
        <main
            className={`min-h-screen bg-[#C8D8E8] flex flex-col items-center justify-center px-5 gap-12 `}
        >
            <h1 className="text-5xl font-extrabold text-gray-800 text-center leading-tight">
                Blackma <br /> {t("auth.courier")}
            </h1>

            <LoginFormCard />
        </main>
    )
}

export default LoginPage