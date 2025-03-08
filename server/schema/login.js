import Joi from "joi";

const loginSchema = Joi.object({
  email: Joi.string().email(),
  username: Joi.string().min(3).max(30),
  password: Joi.string().min(6).required(),
}).xor("email", "username");

export default loginSchema;
