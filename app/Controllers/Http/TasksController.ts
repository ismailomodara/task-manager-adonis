import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Task from "App/Models/Task"

export default class TasksController {
  public async index({ auth }: HttpContextContract) {

    const user = auth.user;
    await user?.preload('tasks')

    console.log(user)
    return {
      status: true,
      message: "Tasks fetched",
      data: user?.tasks
    }
  }

  public async store({ request, auth }: HttpContextContract) {
    const payload = request.body();
    const task = await auth.user?.related('tasks').create(payload);

    return {
      status: true,
      message: "Task created",
      data: task
    }
  }

  public async show({ params }: HttpContextContract) {
    const task = await Task.findOrFail(params.id)

    return {
      status: true,
      message: "Task fetched",
      data: task
    }
  }

  public async update({ params, request }: HttpContextContract) {

    let task = await Task.findOrFail(params.id)
    task.title = request.body().title
    task.description = request.body().description
    task.dueAt = request.body().due_at
    task.statusId = request.body().status_id

    await task.save()

    return {
      status: true,
      message: "Task updated",
      data: task
    }
  }

  public async destroy({ params }: HttpContextContract) {
    let task = await Task.findOrFail(params.id)
    await task.delete()

    return {
      status: true,
      message: "Task deleted",
      data: null
    }
  }
}
