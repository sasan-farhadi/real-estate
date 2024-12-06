import DashboardCard from "@/module/DashboardCard"
import styles from "./MyProfilesPage.module.css"
const MyProfilesPage = ({ profiles }) => {
    return (
        <div>
            {profiles.length ? null : <p className={styles.text}> هیچ آگهی ثبت نشده است </p>}
            {profiles.map(x => (
                <DashboardCard key={x._id} data={JSON.parse(JSON.stringify(x))} />
            ))}
        </div>
    )
}
export default MyProfilesPage
