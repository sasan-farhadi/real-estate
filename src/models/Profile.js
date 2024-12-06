import { Schema, model, models } from "mongoose";

const profileSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        realState: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        constructionDate: {
            type: Date,
            required: true,
        },
        category: {
            type: String,
            enum: ["villa", "apartment", "store", "office"],
            required: true,
        },
        amenities: {
            type: [String],
            default: [],
        },
        rules: {
            type: [String],
            default: [],
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User", // رفرنس به مدل یوزر
        },
        published: { //پیش نویس باشد یا منتشر شده
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true } //CreatedAt , UpdateAt 
);

const Profile = models.Profile || model("Profile", profileSchema);

export default Profile;
