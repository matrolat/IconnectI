import axios from 'axios'

const URL = "localhost:4000";
export const companyRegistration = async() => {
    axios.post('https:sample-endpoint.com/user', {
        Name: 'Fred',
        Age: '23'
      })
      .then(function (response) {
        console.log(response);
      })
    
}