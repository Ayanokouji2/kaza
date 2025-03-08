import prismadb from "../lib/PrismaClient.js";
import { ApiError } from "../utils/handleApiError.js";

export const updateUser = async( req, res ) => {
    const { bio , name } = req.body;
    const avatar = req.file.path;

    const userId = req._id;

    const user = await prismadb.profile.findUnique({
        where:{
            userId 
        },
        select:{
            avatar : true
        }
    })

    console.log(user, "This is the user");

    await prismadb.profile.update({
        where:{
            username
        },
        data:{
            bio,
            name,
        }
    })

}