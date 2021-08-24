import { Context, Get, HttpResponseForbidden, HttpResponseOK, ValidatePathParam } from '@foal/core';
import { User } from '../../entities/user.entity';

export class UsersController {

  @Get('/:id/:name')
  @ValidatePathParam('id', {type: 'integer'})
  @ValidatePathParam('name', {type: 'string'})
  async login(ctx: Context, {id, name}) {
    
    try{
      let user = await User.findOneOrFail({ id, name });
      return new HttpResponseOK(user);
    }catch(EntityNotFoundError){
      console.log('User not found');
    }
    
    return new HttpResponseForbidden();
  }

}
