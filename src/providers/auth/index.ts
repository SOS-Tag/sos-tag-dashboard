import { AuthProvider, UserIdentity } from "react-admin";

const authProvider: AuthProvider = {
  login: ({ username, password }: { username: string, password: string}) => {
    return Promise.resolve();
  },
  checkError: (error: any) => {
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem('auth')
      ? Promise.resolve()
      : Promise.reject({ message: 'login required' });
    // A token exists?
    // return Promise.resolve();
  },
  logout: () => {
    // Remove the token
    return Promise.resolve();
  },
  getIdentity: () => {
    return Promise.resolve({} as UserIdentity);
  },
  getPermissions: (params: any) => {
    return Promise.resolve();
  },
};

export default authProvider;
