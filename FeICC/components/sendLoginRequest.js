import Axios from 'axios';

function sendLoginRequest(email, password) {
    const apiUrl = 'https://exe201-icc.azurewebsites.net/api/v1/auth/SignIn';

    const requestData = {
        email: email,
        password: password,
    };

    Axios.post(apiUrl, requestData)
        .then((response) => {
            console.log('Đăng nhập thành công', response.data);
        })
        .catch((error) => {
            console.error('Đăng nhập thất bại', error);
        });
}
