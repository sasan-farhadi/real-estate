import { Schema, model, models } from "mongoose"

const userSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true //وقتی ترو باشد یعنی غیرقابل تغییر در دیتابیس
    },
})

const User = models.User || model("User", userSchema)

export default User