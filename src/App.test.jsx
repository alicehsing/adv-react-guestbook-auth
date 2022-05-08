import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

const server = setupServer(
  //mock out endpoint that does authentication
  rest.post(
    'https://ezwbsacoojmonmiqffad.supabase.co/auth/v1/token',
    (req, res, ctx) =>
      res(
        ctx.json({
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
        })
      )
  ),

  // mock out endpoint that fetches entries
  rest.get(
    'https://ezwbsacoojmonmiqffad.supabase.co/rest/v1/entries',
    (req, res, ctx) =>
      res(
        ctx.json([
          {
            id: 419,
            guest_id: '123456',
            content: "Can't wait for summer to start!",
            created_at: '2022-05-08T06:52:02.76014+00:00',
          },
          {
            id: 418,
            guest_id: '123456',
            content: 'I want some sun please!!!\n',
            created_at: '2022-05-08T06:51:40.701669+00:00',
          },
          {
            id: 417,
            guest_id: '123456',
            content: 'Hello World!',
            created_at: '2022-05-08T06:51:12.555836+00:00',
          },
        ])
      )
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<App />', () => {
  it('renders a list of guest entries and user is able to add an entry', async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </MemoryRouter>
    );

    //renders the home page with a link to Guestbook view
    let guestbookLink = screen.getByRole('link', {
      name: /start writing in guestbook/i,
    });
    userEvent.click(guestbookLink);

    // renders auth page so user can type in email and password
    const emailInput = screen.getByRole('textbox');
    userEvent.type(emailInput, 'testuser3@test.com');

    const passwordInput = screen.getByPlaceholderText('Password');
    userEvent.type(passwordInput, '123123');

    //user click Sign In button
    const signInButton = await screen.findByRole('button', { name: 'Sign In' });
    userEvent.click(signInButton);

    userEvent.click(
      await screen.findByRole('link', { name: /start writing in guestbook/i })
    );

    await screen.findByRole('heading', { name: /your entries/i });

    const entry = await screen.findByText('I want some sun please!!!');
    expect(entry).toHaveTextContent('I want some sun please!!!');
  });
});
