import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createHttpLink, ApolloClient, from, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import jwtDecode from 'jwt-decode';
import { getAccessToken, setAccessToken } from './utils/accessToken';

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
});

const authLink = setContext((_, { headers }) => {
  const token = getAccessToken()

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
});

const tokenLink = new TokenRefreshLink({
  accessTokenField: "accessToken",
  isTokenValidOrUndefined: () => {
    const accessToken = getAccessToken();

    if (!accessToken) {
      return true;
    }

    try {
      const { exp } = jwtDecode(accessToken) as any;

      if (Date.now() >= exp * 1000) {
        // expired
        return false;
      }

      return true;
    } catch (err) {
      return false;
    }
  },
  fetchAccessToken: () => {
    return fetch("refresh_token", {
      method: "POST",
      credentials: "include",
    });
  },
  handleFetch: accessToken => {
    setAccessToken(accessToken);
  },
  handleError: err => {
    // full control over handling token fetch Error
    console.warn('Your refresh token is invalid. Try to relogin');
    console.error(err);
  }
});

const client = new ApolloClient({
  link: from([tokenLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
