import { Context, Get, HttpResponseForbidden, HttpResponseOK, ValidatePathParam } from '@foal/core';
import { User } from '../../entities/user.entity';

export class UsersController {

  @Get('/:id/:name')
  @ValidatePathParam('id', {type: 'integer'})
  @ValidatePathParam('name', {type: 'string'})
  async login(ctx: Context, {id, name}) {
    
    try{
      let user = await User.findOneOrFail({ id });
      if(user.name === name) return new HttpResponseOK(user);
      if(user.name !== name) return new HttpResponseForbidden();
    }catch(EntityNotFoundError){
      const newUser = new User();
      newUser.id = id;
      newUser.name =name;
      newUser.save();
      console.log(`Created new user `);
      return new HttpResponseOK(newUser);
    }
   
    return new HttpResponseForbidden();
  }

}
