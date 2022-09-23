import axios, { AxiosRequestConfig } from 'axios';

// Log In
export interface Credentials {
  email: string;
  password: string;
}

export const onLogIn = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: process.env.API_BASE_URL + '/api/v1/members/login',
    data,
  };
  try {
    const { data: response } = await axios.request(requestConfig);
  } catch (e) {
    console.error(e);
    return { error: e.response.data.message };
  }

  // axios
  //   .post('https://api.fafago.link/api/v1/members/login')
  //   .then((response) => console.log(response))
  //   .catch((error) => console.log(error));
};
