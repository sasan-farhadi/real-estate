import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import User from "@/models/User"
import MyProfilesPage from "@/template/MyProfilesPage"
import connectDB from "@/utils/connectDB"
import { getServerSession } from "next-auth"

const MyProfiles = async () => {
    await connectDB()
    const seesion = await getServerSession(authOptions)
    const [user] = await User.aggregate([{ $match: { email: seesion.user.email } }, {
        $lookup: {
            from: "profiles",
            foreignField: "userId",
            localField: "_id",
            as: "profiles"
        }
    }])
    return <MyProfilesPage profiles={user.profiles} />
}
export default MyProfiles
