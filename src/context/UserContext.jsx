import { createContext, useContext, useState } from 'react';
import { getUser, signInUser, signOutUser, signUpUser } from '../services/user';

// create a big bucket for us to store state into
export const UserContext = createContext();

// a way to provide those states so other components have access to
// Context Provider that will provide components with that state
// Use the children prop to render child components from within a Provider
export const UserProvider = ({ children }) => {
  const currentUser = getUser();
  //create some state
  //setting user email to null initially, so we know whether someone is logged in or not.
  const [user, setUser] = useState(currentUser || { email: null });

  // signup function
  async function signup(email, password) {
    const newUser = await signUpUser({ email, password });
    if (newUser) {
      setUser(newUser);
    }
  }

  // sign in function
  async function login(email, password) {
    const authenticatedUser = await signInUser({ email, password });
    if (authenticatedUser) {
      setUser(authenticatedUser);
    } else {
      // set an error message of "invalid credentials"
      throw new Error('Invalid Credentials');
    }
  }

  //sign out function
  async function logout() {
    setUser({ email: null });
    signOutUser();
  }

  return (
    // Context has a Provider method that gives us access to state(the "value" prop) to any children components
    <UserContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </UserContext.Provider>
  );
};

// create a custom hook called "useUser"
export const useUser = () => {
  const context = useContext(UserContext);

  //if there is no context or if we try to use this hook from outside of the provider, throw an error
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};
