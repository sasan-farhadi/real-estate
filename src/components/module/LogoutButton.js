"use client"

import { signOut } from "next-auth/react"
import styles from "./LogoutButton.module.css"
import { FiLogOut } from "react-icons/fi"
const LogoutButton = () => {
    return (
        <div className={styles.button} onClick={signOut}>
            <FiLogOut />
            خروج
        </div>
    )
}

export default LogoutButton
