import { createUser } from '~~/server/db/users';
import { userTransformer } from '~~/server/transformers/user';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, password, repeatPassword, email, name } = body;

  if (!username || !password || !repeatPassword || !email || !name) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: 'Invalid params' })
    );
  }

  if (password !== repeatPassword) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: 'Passwords do not match' })
    );
  }

  const user = await createUser({
    email,
    name,
    username,
    password,
    profileImage: `https://picsum.photos/id/${Math.floor(
      Math.random() * 1001
    )}/200/200`,
  });

  return { body: userTransformer(user) };
});
