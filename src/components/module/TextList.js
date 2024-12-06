import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "./TextList.module.css"

const TextList = ({ title, profileData, setProfileData, type }) => {
    const changeHandler = (e, index) => {
        const { value } = e.target
        const list = [...profileData[type]]
        list[index] = value
        setProfileData({ ...profileData, [type]: list })
    }
    const deleteHandler = (index) => {
        const list = [...profileData[type]]
        list.splice(index, 1)
        setProfileData({ ...profileData, [type]: list })
    }
    const addHandler = () => {
        setProfileData({ ...profileData, [type]: [...profileData[type], ""] })
    }
    return <div className={styles.container}>
        <p>{title}</p>
        {
            profileData[type].map((x, index) => (
                <div className={styles.card} key={index}>
                    <input type="text" value={x} onChange={e => changeHandler(e, index)} />
                    <button onClick={() => deleteHandler(index)}>
                        حذف
                        <AiOutlineDelete />
                    </button>
                </div>
            ))
        }
        <button onClick={addHandler}>افزدون<MdOutlineLibraryAdd /></button>
    </div>
}

export default TextList
