import User from "@/models/User"
import { hashPassword } from "@/utils/auth"
import connectDB from "@/utils/connectDB"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        await connectDB()
        const { email, password } = await req.json()
        if (!email || !password) {
            return NextResponse.json({ error: "اطلاعات وارد شده معتبر نیست" }, { status: 422 })
        }
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return NextResponse.json({ error: "این حساب کاربری قبلا ایجاد شده است" }, { status: 422 })
        }
        const hashedPassword = await hashPassword(password)

        const newUser = await User.create({
            email: email, password: hashedPassword
        })
        console.log(newUser)
        return NextResponse.json({ messege: "حساب کاربری ایجاد شد" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: "مشکلی در سرور رخ داده است" }, { status: 500 })
    }
}