// 3p
// import { hashPassword } from '@foal/core';
import { createConnection } from 'typeorm';

// App
import { User } from '../app/entities';

export const schema = {
  additionalProperties: false,
  properties: {
    name: { type: 'string' }
  },
  required: [ 'name' ],
  type: 'object',
};

export async function main(args: { name: string}) {
  const connection = await createConnection();

  try {
    const user = new User();
    user.name = args.name;

    console.log(await user.save());
  } catch (error) {
    console.log(error.message);
  } finally {
    await connection.close();
  }
}
