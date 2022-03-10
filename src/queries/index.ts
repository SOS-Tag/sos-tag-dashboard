import { GET_LIST } from 'react-admin';
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
              }
              totalItems
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
    `
  },
};
