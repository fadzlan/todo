import { ApiInfo, ApiServer, Context, controller, Get, HttpResponseOK } from '@foal/core';
import { TasksController } from './api';

@ApiInfo({
  title: 'Application API',
  version: '1.0.0'
})
@ApiServer({
  url: '/api'
})
export class ApiController {
  subControllers = [
    controller('/tasks', TasksController)
  ];


}
