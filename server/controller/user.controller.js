import prismadb from "../lib/PrismaClient.js";
import { ApiError } from "../utils/handleApiError.js";

export const updateUser = async( req, res ) => {
    const { bio , name } = req.body;

    // console.log("THe command is here",req )
    // const avatar = req?.file?.path;

    const userId = req._id;

    const user = await prismadb.profile.findUnique({
        where:{
            userId:userId 
        }
    })

    const username = req.username;
    console.log(req._id, "This is the user", req.username);

    const userprofile = await prismadb.profile.update({
        where:{
            userId,
            username
        },
        data:{
            bio,
            name,
        }
    })

    
    
    return res.status(200).json({
        success: true,
        message: "User Updated ..!",
        userprofile
    })
}