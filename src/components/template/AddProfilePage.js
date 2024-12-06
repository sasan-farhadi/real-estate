"use client"

import { useState } from "react"
import styles from "./AddProfilePage.module.css"
import TextInput from "@/module/TextInput"
import RadioList from "@/module/RadioList"
import TextList from "@/module/TextList"
import CustomDatePicker from "@/module/CustomDatePicker"
import toast from "react-hot-toast"
import { ThreeDots } from "react-loader-spinner"

const AddProfilePage = () => {

    const [profileData, setProfileData] = useState({
        title: "",
        description: "",
        location: "",
        phone: "",
        price: "",
        realState: "",
        constructionDate: new Date(),
        category: "",
        rules: [],
        amenities: [],
    })

    const [loading, setLoading] = useState(false)
    const submitHandler = async () => {
        setLoading(true)
        const res = await fetch("/api/profile", {
            method: "POST",
            body: JSON.stringify(profileData),
            headers: { "Content-Type": "application/json" }
        })
        const data = await res.json()
        setLoading(false)
        if (data.error) {
            toast.error(data.error)
        } else {
            toast.success(data.message)
        }

    }
    return <div className={styles.container}>
        <h3> ثبت آگهی </h3>
        <TextInput title="عنوان آگهی" name="title" profileData={profileData} setProfileData={setProfileData} />
        <TextInput title="توضیحات" name="description" profileData={profileData} setProfileData={setProfileData} textarea={true} />
        <TextInput title="آدرس" name="location" profileData={profileData} setProfileData={setProfileData} />
        <TextInput title="شماره تماس" name="phone" profileData={profileData} setProfileData={setProfileData} />
        <TextInput title="قیمت(تومان)" name="price" profileData={profileData} setProfileData={setProfileData} />
        <TextInput title="بنگاه" name="realState" profileData={profileData} setProfileData={setProfileData} />
        <RadioList profileData={profileData} setProfileData={setProfileData} />
        <TextList title="امکانات رفاهی" profileData={profileData} setProfileData={setProfileData} type="amenities" />
        <TextList title="قوانین" profileData={profileData} setProfileData={setProfileData} type="rules" />
        <CustomDatePicker profileData={profileData} setProfileData={setProfileData} />
        {
            loading ? <ThreeDots color="#304ffe"
                ariaLabel="three-dots-loading"
                visible={true}
                wrapperStyle={{ margin: "auto" }}
                height={45} /> : <button className={styles.submit} onClick={submitHandler}>ثبت آگهی</button>
        }
    </div>
}

export default AddProfilePage
