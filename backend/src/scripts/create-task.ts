// 3p
import { createConnection } from 'typeorm';
import { User, Task } from '../app/entities';

export const schema = {
  additionalProperties: false,
  properties: {
    author: {type: 'number'},
    name: {type: 'string'}
  },
  required: [ 'author', 'name' ],
  type: 'object',
};

export async function main(args: {author: number, name: string}) {
  const connection = await createConnection();
  
  try {
    const user = await User.findOneOrFail({ id: args.author });

    const task = new Task();
    task.author = user;
    task.name = args.name;

    console.log(await task.save());
  } catch (error) {
    // console.error(error);
  } finally {
    await connection.close();
  }
}
