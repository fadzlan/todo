import { Context, Get, HttpResponseOK, Post, Put, ValidateBody, ValidatePathParam, ValidateQueryParam } from '@foal/core';
import { getConnection } from 'typeorm';
import { Task, User } from '../../entities';

export class TasksController {

  @Get('/')
  @ValidateQueryParam('authorId', {type: 'number'}, {required: false})
  async listTasks(ctx: Context) {
    const authorId = ctx.request.query.authorId as number|undefined;

    let queryBuilder = Task.createQueryBuilder('task').leftJoinAndSelect('task.author', 'author').select([
      'task.id',
      'task.name',
      'task.completed',
      'author.id',
      'author.name'
    ]);

    if(authorId !== undefined) {
      queryBuilder = queryBuilder.where('author.id = :authorId', { authorId });
    }

    const tasks = await queryBuilder.getMany();

    return new HttpResponseOK(tasks);
  }

  @Put('/:id')
  @ValidateBody({
    properties: {
      name: {type: 'string'},
      completed: {type: 'boolean'}
    }
  })
  @ValidatePathParam('id', {type: 'integer'})
  async updateTask(ctx: Context, {id}, body) {
    await getConnection().createQueryBuilder().update(Task).set(body).where('id = :id', {id}).execute();

    return new HttpResponseOK();
  }

  @Post()
  @ValidateBody({
    properties: {
      authorId: {type: 'number'},
      name: {type: 'string'},
    },
    required: ['authorId', 'name']
  })
  async createTask(ctx: Context){
    const body = ctx.request.body;
    console.log(body);
    const task = new Task();
    try {
      const user = await User.findOneOrFail({ id: body.authorId });
      task.author = user;
      task.name = body.name;
  
      console.log(await task.save());
    } catch (error) {
      console.error(error);
    }

    return new HttpResponseOK(task);
  
  }

}
