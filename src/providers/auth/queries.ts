export const LOGIN = `
  mutation Login($loginInput: LoginInput) {
    login(loginInput: $loginInput) {
      response {
        accessToken
      }
      error {
        type
        code
        title
        message
        timestamp
        fields {
          type
          name
          detail
        }
      }
    }
  }
`;

export const LOGOUT = `
  mutation Logout {
    logout {
      response
      error {
        type
        code
        title
        message
        timestamp
        fields {
          type
          name
          detail
        }
      }
    }
  }
`;
