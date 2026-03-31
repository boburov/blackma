"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const useAuth = () => {
  const router = useRouter()

  useEffect(() => {
    const mail = localStorage.getItem("mail")
    const password = localStorage.getItem("password")

    const isAuthenticated = mail === "blackma@gmail.com" && password === "blackma.strong.password"

    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [router])
}

export default useAuth