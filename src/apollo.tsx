import { ApolloLink, Observable } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { createHttpLink } from 'apollo-link-http';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import { getAccessToken, isTokenValidOrUndefined, setAccessToken } from './utils/access-token';

const httpLink = createHttpLink({ uri: process.env.REACT_APP_API_BASE_URL + '/graphql', credentials: 'include' });

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle: any;
      Promise.resolve(operation)
        .then(operation => {
          const accessToken = getAccessToken();
          if (accessToken) {
            operation.setContext({
              headers: {
                authorization: `bearer ${accessToken}`
              }
            });
          }
        })
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer)
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);

const tokenRefreshLink: any = new TokenRefreshLink({
  accessTokenField: 'accessToken',
  isTokenValidOrUndefined,
  fetchAccessToken: () => {
    return fetch(process.env.REACT_APP_API_BASE_URL + '/refresh_token', {
      method: 'POST',
      credentials: 'include'
    });
  },
  handleFetch: accessToken => {
    setAccessToken(accessToken);
  },
  handleError: err => {
    console.warn('Your refresh token is invalid. Try to login again');
    console.error(err);
  }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const link = ApolloLink.from([
  tokenRefreshLink,
  errorLink,
  requestLink,
  httpLink
]);
