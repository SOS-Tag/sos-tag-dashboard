import { GET_LIST, GET_ONE, UPDATE } from 'react-admin';
import gql from 'graphql-tag';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Sheet: {
    [GET_LIST]: gql`
      query AllSheets ($options: QueryOptions) {
        data: allSheets(options: $options) {
          response {
            items {
              _id
              fname
              lname
              sex
              dateOfBirth
              nationality
              bloodType
              smoker
              enabled
              user {
                email
              }
            }
            totalItems
          }
        }
      }
    `,
    [GET_ONE]: gql`
      query Sheet($id: String) {
        data: Sheet(id: $id) {
          response {
            _id
            fname
            lname
            sex
            dateOfBirth
            nationality
            bloodType
            smoker
            enabled
          }
        }
      }
    `,
    [UPDATE]: gql`
      mutation UpdateSheet($updateInput: UpdateSheetInput) {
        data: updateSheet(updateInput: $updateInput) {
          response {
            _id
            fname
            lname
            sex
            dateOfBirth
            nationality
            bloodType
            smoker
            enabled
          }
        }
      }
    `
  },
  User: {
    [GET_LIST]: gql`
      query AllUsers ($options: QueryOptions) {
        data: allUsers(options: $options) {
          response {
            items {
                _id
                email
                phone
              }
            totalItems
          }
        }
      }
    `,
    [GET_ONE]: gql`
      query User($id: String) {
        data: User(id: $id) {
          response {
            _id
            fname
            lname
            email
            phone
          }
        }
      }
    `,
    [UPDATE]: gql`
    mutation UpdateUser($updateInput: UpdateUserInput) {
      data: updateUser(updateInput: $updateInput) {
        response {
          _id
          fname
          lname
          email
          phone
        }
      }
    }
  `
  },
};
