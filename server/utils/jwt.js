import jwt from 'jsonwebtoken';

const getAccessToken = (user) => {
  const config = useRuntimeConfig();

  return jwt.sign(
    {
      userId: user.id,
    },
    config.jwtAccessTokenSecured,
    {
      expiresIn: '10m',
    }
  );
};

const getRefreshToken = (user) => {
  const config = useRuntimeConfig();

  return jwt.sign(
    {
      userId: user.id,
    },
    config.jwtRefreshTokenSecured,
    {
      expiresIn: '4h',
    }
  );
};

export const getTokens = (user) => {
  const accessToken = getAccessToken(user);
  const refreshToken = getRefreshToken(user);

  return { accessToken, refreshToken };
};

export const sendRefreshToken = (event, token) => {
  setCookie(event, 'refresh_token', token, {
    httpOnly: true,
    sameSite: true,
  });
};
