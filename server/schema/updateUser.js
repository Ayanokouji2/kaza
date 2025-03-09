import Joi from "joi";

const updateUserSchema = Joi.object({
	bio: Joi.string().max(500).optional(),
	name: Joi.string().min(3).max(50),
	avatar: Joi.string().optional(),
});

export default updateUserSchema;
