const { z } = require('zod');

// Creating an object schema
const signupSchema = z.object({
  username: z
    .string({ required_error: 'Name is required' })
    .trim()
    .min(3, { message: 'Name must be lest of 3 chars.' })
    .max(255, { message: 'Name must not be more than 255 characters' }),
  email: z
    .string({ required_error: 'Email is requied' })
    .trim()
    .email({ message: 'Invaid email address' })
    .min(3, { message: 'Email must be at least of 3 characters' })
    .max(255, { message: 'Email must not be more than 255 characters ' }),
  phone: z
    .string({ required_error: 'Phone is required' })
    .trim()
    .min(7, { message: 'Password must be at least of 6 characters' })
    .max(1024, "Password can't be greater  than 1024 Characters"),
});
// login
const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email format' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});
module.exports = { signupSchema, loginSchema };
