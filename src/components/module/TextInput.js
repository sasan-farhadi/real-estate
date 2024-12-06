import { e2p, p2e } from "@/utils/replaceNumber"
import styles from "./TextInput.module.css"

const TextInput = ({ title, name, profileData, setProfileData, textarea = false }) => {

    const changeHandler = (e) => {
        const { name, value } = e.target
        setProfileData({ ...profileData, [name]: e2p(value) })
    }

    return <div className={styles.container}>
        <p>{title}</p>
        {textarea ?
            <textarea type="text" name={name} value={profileData[name]} onChange={changeHandler} /> :
            <input type="text" name={name} value={profileData[name]} onChange={changeHandler} />}
    </div>

}

export default TextInput