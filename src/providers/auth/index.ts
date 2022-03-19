import { AuthProvider, UserIdentity } from "react-admin";
import { isTokenValid, setAccessToken } from "../../utils/access-token";
import { LOGIN, LOGOUT } from './queries';

const authProvider: AuthProvider = {
  login: ({ username, password }: { username: string, password: string }) => {
    const request = new Request(process.env.REACT_APP_API_BASE_URL + '/graphql', {
      method: 'POST',
      body: JSON.stringify({
        query: LOGIN,
        variables: {
          loginInput: {
            email: username, password
          },
        },
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    return fetch(request)
      .then(res => {
        return res.json();
      })
      .then(json => {
        if (json.data.login.error)
          throw new Error(json.data.login.error.message);

        setAccessToken(json.data.login.response.accessToken);
      })
      .catch((err) => {
        throw new Error(err);
      });
  },

  checkError: (error: any) => {
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },

  checkAuth: () => {
    return isTokenValid()
      ? Promise.resolve()
      : Promise.reject({ message: 'Not authenticated' });
  },

  logout: () => {
    setAccessToken('');
    const request = new Request(process.env.REACT_APP_API_BASE_URL + '/graphql', {
      method: 'POST',
      body: JSON.stringify({
        query: LOGOUT,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    return fetch(request)
      .then(res => {
        return res.json();
      })
      .then(json => {
        if (json.data.logout.error)
          throw new Error(json.data.logout.error.message);
      })
      .catch((err) => {
        throw new Error(err);
      });
    
    // reset apollo client store ?
  },

  getIdentity: () => {
    return Promise.resolve({} as UserIdentity);
  },

  getPermissions: (params: any) => {
    return Promise.resolve();
  },
};

export default authProvider;
