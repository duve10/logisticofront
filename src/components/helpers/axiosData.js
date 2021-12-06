import axios from 'axios'

export const sendRegister = async(url, data) => {

    const response = await axios.post(url, data, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
}