// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TasksController {
  public async index() {
    return {
      status: true,
      message: "Tasks fetched",
      data: []
    }
  }

  public async store() {
    return {
      status: true,
      message: "Task created",
      data: {}
    }
  }

  public async show() {
    return {
      status: true,
      message: "Task fetched",
      data: {}
    }
  }

  public async update() {
    return {
      status: true,
      message: "Task updated",
      data: {}
    }
  }

  public async destroy() {
    return {
      status: true,
      message: "Task deleted",
      data: null

    }
  }
}
