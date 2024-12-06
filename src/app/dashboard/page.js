import DashboardPage from "@/template/DashboardPage"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import connectDB from "@/utils/connectDB"
import User from "@/models/User"

const Dashboard = async () => {
    await connectDB()
    const session = await getServerSession(authOptions)
    const user = await User.findOne({ email: session.user.email })
    console.log(user)
    return (
        <div>
            <DashboardPage createdAt={user.createdAt} />
        </div>
    )
}
export default Dashboard
