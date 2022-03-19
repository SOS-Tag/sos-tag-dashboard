import jwtDecode from 'jwt-decode';

let accessToken = '';

export const setAccessToken = (s: string) => {
  accessToken = s;
};

export const getAccessToken = () => {
  return accessToken;
};

export const isTokenValidOrUndefined = () => {
  const token = getAccessToken();

  if (!token) {
    return true;
  }

  try {
    const { exp } = jwtDecode(token) as any;
    if (Date.now() >= exp * 1000) {
      return false;
    } else {
      return true;
    }
  } catch {
    return false;
  }
}

export const isTokenValid = () => {
  const token = getAccessToken();

  if (!token || token === '') {
    return false;
  }

  try {
    const { exp } = jwtDecode(token) as any;
    if (Date.now() >= exp * 1000) {
      return false;
    } else {
      return true;
    }
  } catch {
    return false;
  }
}