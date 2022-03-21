import { CREATE, DELETE, GET_LIST, GET_ONE, UPDATE } from 'react-admin';
import gql from 'graphql-tag';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Sheet: {
    [CREATE]: gql`
      mutation CreateSheet($count: Float) {
        data: createSheet(count: $count) {
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
            user {
              email
            }
          }
        }
      }
    `,
    [GET_LIST]: gql`
      query AllSheets($options: QueryOptions) {
        data: allSheets(options: $options) {
          response {
            items {
              enabled
              _id
              fname
              lname
              sex
              dateOfBirth
              nationality
              bloodType
              smoker
              organDonor
              advanceDirectives
              allergies
              medicalHistory
              currentTreatment
              treatingDoctor {
                fname
                lname
                phone
              }
              emergencyContacts {
                fname
                lname
                role
                phone
              }
              user {
                email
              }
              createdAt
              updatedAt
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
            enabled
            _id
            fname
            lname
            sex
            dateOfBirth
            nationality
            bloodType
            smoker
            organDonor
            advanceDirectives
            allergies
            medicalHistory
            currentTreatment
            treatingDoctor {
              fname
              lname
              phone
            }
            emergencyContacts {
              fname
              lname
              role
              phone
            }
            user {
              email
            }
            createdAt
            updatedAt
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
            user {
              email
            }
          }
        }
      }
    `,
    [DELETE]: gql`
      mutation DeleteSheet($id: String) {
        deleteSheet(id: $id) {
          response {
            _id
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
    `,
  },
  User: {
    [GET_LIST]: gql`
      query AllUsers($options: QueryOptions) {
        data: allUsers(options: $options) {
          response {
            items {
                _id
                fname
                lname
                address
                zipCode
                city
                email
                phone
                nationality
                password
                activated
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
            address
            zipCode
            city
            email
            phone
            nationality
            password
            activated
            createdAt
            updatedAt
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
    `,
    [UPDATE]: gql`
      mutation UpdateUser($updateInput: UpdateUserInput) {
        data: updateUser(updateInput: $updateInput) {
          response {
            _id
            fname
            lname
            address
            zipCode
            city
            email
            phone
            nationality
            password
            activated
            createdAt
            updatedAt
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
    `,
    [DELETE]: gql`
      mutation DeleteUser($id: String) {
        deleteUser(id: $id) {
          response {
            _id
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
    `,
  },
};
