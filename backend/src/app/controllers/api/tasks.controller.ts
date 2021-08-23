import { Context, Get, HttpResponseOK, ValidateQueryParam } from '@foal/core';
import { Task } from '../../entities';

export class TasksController {

  @Get('/')
  @ValidateQueryParam('authorId', {type: 'number'}, {required: false})
  async listTasks(ctx: Context) {
    const authorId = ctx.request.query.authorId as number|undefined;
    console.log('hey');

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

}
