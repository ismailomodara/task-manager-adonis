// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StatusesController {
  public async index() {
    return {
      status: true,
      message: "Statuses fetched",
      data: []
    }
  }

  public async store() {
    return {
      status: true,
      message: "Status created",
      data: {}
    }
  }

  public async show() {
    return {
      status: true,
      message: "Status fetched",
      data: {}
    }
  }

  public async update() {
    return {
      status: true,
      message: "Status updated",
      data: {}
    }
  }

  public async destroy() {
    return {
      status: true,
      message: "Status deleted",
      data: null

    }
  }
}
