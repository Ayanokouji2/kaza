import { ApiError } from "../utils/handleApiError.js";

export const updateUser = async( req, res ) => {
    const { bio , name } = req.body;

    if(!bio && !name)
        throw new ApiError(400, "Enter any field to update")

    const updateField = [bio, name].filter(Boolean);

    console.log(updateField)




}