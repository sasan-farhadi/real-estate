"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import styles from "./SignupPage.module.css"
import toast from "react-hot-toast"
import { ThreeDots } from "react-loader-spinner"

const SignupPage = () => {
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, serRePassword] = useState("")
    const [loading, setLoading] = useState(false)

    const signupHandler = async (e) => {
        e.preventDefault()
        if (password !== rePassword) {
            toast.error("رمز عبور یکسان نیست!")
            return
        }

        setLoading(true)
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" }
        })
        const data = await res.json()
        setLoading(false)
        if (res.status === 201) {
            router.push("/signin")
        } else {
            toast.error(data.error)
        }
    }

    return <div className={styles.form}>
        <h4> فرم ثبت نام </h4>
        <form>
            <label htmlFor="email"> ایمیل : </label>
            <input id="email" type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <label htmlFor="password"> رمز عبور : </label>
            <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <label htmlFor="repassword"> تکرار رمز عبور : </label>
            <input id="repassword" type="password" value={rePassword} onChange={e => serRePassword(e.target.value)} />
            {loading ? (<ThreeDots
                color="#304ffe"
                height={45}
                ariaLabel="three-dots-loading"
                visible={true}
                wrapperStyle={{ margin: "auto" }}
            />) : (<button type="submit" onClick={signupHandler}>ثبت نام</button>
            )}
        </form>

        <p>حساب کاربری دارید؟
            <Link href="/signin">ورود</Link>
        </p>
    </div>
}
export default SignupPage
