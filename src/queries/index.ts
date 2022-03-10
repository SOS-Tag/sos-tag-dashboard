import { GET_LIST } from 'react-admin';
import gql from 'graphql-tag';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Sheet: {
    [GET_LIST]: gql`
      query AllSheets {
        data: allSheets {
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
};
