import Joi from "joi";

const updateUserSchema = Joi.object({
  bio: Joi.string().max(500).required(),
  name: Joi.string().min(3).max(50).required(),
});

export default updateUserSchema;
