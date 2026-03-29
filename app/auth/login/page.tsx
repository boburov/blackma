import { nunitoSans } from "@/app/lib/fonts"
import { LoginFormCard } from "@/components/LoginForm"

const LoginPage = () => {
    return (
        <main
            className={`${nunitoSans.className} min-h-screen bg-[#C8D8E8] flex flex-col items-center justify-center px-5 gap-12 `}
        >
            <h1 className="text-5xl font-extrabold text-gray-800 text-center leading-tight">
                Blackma <br /> Kuryer
            </h1>

            <LoginFormCard />
        </main>
    )
}

export default LoginPage