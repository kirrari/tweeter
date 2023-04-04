import bcrypt from 'bcrypt';
import { createRefreshToken } from '~~/server/db/refreshTokens';
import { getUserByEmail } from '~~/server/db/users';
import { userTransformer } from '~~/server/transformers/user';
import { getTokens, sendRefreshToken } from '~~/server/utils/jwt';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;

  if (!email || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: 'Invalid params',
      })
    );
  }

  const user = await getUserByEmail(email);

  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: 'Email is invalid',
      })
    );
  }

  const isPasswordsMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordsMatch) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: 'Password is invalid',
      })
    );
  }

  // Generate tokens
  const { accessToken, refreshToken } = getTokens(user);

  // Save RefreshToken inside db
  await createRefreshToken({ token: refreshToken, userId: user.id });

  // Add http only cookie
  sendRefreshToken(event, refreshToken);

  return {
    user: userTransformer(user),
    access_token: accessToken,
  };
});
