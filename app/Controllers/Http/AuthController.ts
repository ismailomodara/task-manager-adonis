import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from "App/Models/User";
import { schema, rules } from "@ioc:Adonis/Core/Validator"

export default class AuthController {
  public async register({ request, auth, response }: HttpContextContract) {

    const validationSchema = schema.create({
      name: schema.string({ trim: true }),
      email: schema.string({ trim: true }, [
        rules.email(),
        rules.maxLength(255),
        rules.unique({ table: 'users', column: 'email' })
      ]),
      password: schema.string({ trim: true }, [
        rules.minLength(8)
      ])
    })

    const validationData = await request.validate({
      schema: validationSchema
    })
    const user = await User.create(validationData);

    const data = await auth.login(user)

    response.status(201)
    return {
      status: true,
      message: "Account created",
      data
    }
  }

  public async login({ request, auth }: HttpContextContract) {
    const payload = request.body();

    try {
      const user = await auth.attempt(payload.email, payload.password)
      return {
        status: true,
        message: "Login successful",
        data: user
      }
    } catch (error) {
      return {
        status: false,
        message: "Invalid credentials",
        error
      }
    }
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.logout()

    return {
      status: true,
      message: "Logout"
    }
  }
}
