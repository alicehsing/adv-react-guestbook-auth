import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { mockEntriesData } from './fixtures/mockEntriesData';
import { mockAuthData } from './fixtures/mockAuthData';

const server = setupServer(
  //mock out endpoint that does authentication
  rest.post(
    'https://ezwbsacoojmonmiqffad.supabase.co/auth/v1/token',
    (req, res, ctx) => res(ctx.json(mockAuthData))
  ),

  // mock out endpoint that fetches entries
  rest.get(
    'https://ezwbsacoojmonmiqffad.supabase.co/rest/v1/entries',
    (req, res, ctx) => res(ctx.json(mockEntriesData))
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
