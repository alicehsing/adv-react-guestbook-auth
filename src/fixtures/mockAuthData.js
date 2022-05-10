export const mockAuthData = {
  access_token: 'MOCKED_ACCESS_TOKEN',
  token_type: 'bearer',
  expires_in: 3600,
  refresh_token: 'MOCKED_REFRESH_TOKEN',
  user: {
    id: '123456',
    aud: 'authenticated',
    role: 'authenticated',
    email: 'testuser3@test.com',
    email_confirmed_at: '2022-05-08T06:38:10.115918Z',
    phone: '',
    confirmed_at: '2022-05-08T06:38:10.115918Z',
    last_sign_in_at: '2022-05-08T06:41:41.015688272Z',
    app_metadata: {
      provider: 'email',
      providers: ['email'],
    },
    user_metadata: {},
    identities: [
      {
        id: '123456',
        user_id: '123456',
        identity_data: {
          sub: '123456',
        },
        provider: 'email',
        last_sign_in_at: '2022-05-08T06:38:10.114152Z',
        created_at: '2022-05-08T06:38:10.114199Z',
        updated_at: '2022-05-08T06:38:10.114203Z',
      },
    ],
    created_at: '2022-05-08T06:38:10.104387Z',
    updated_at: '2022-05-08T06:41:41.016734Z',
  },
};
