import axios from 'axios';

const authURL = 'https://todo-list.alphacamp.io/api/auth';

export const login = async ({ username, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/login`, {
      username,
      password,
    }); // res.data 解構成 { data }

    const { authToken } = data;

    if (authToken) {
      console.log({ success: true, ...data });
      return { success: true, ...data };
    } else {
      return data;
    }
  } catch (error) {
    console.error('[Login Failed]', error);
  }
};

export const register = async ({ username, password, email }) => {
  try {
    const { data } = await axios.post(`${authURL}/register`, {
      username,
      email,
      password,
    });
    const { authToken } = data;
    if (authToken) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.error(`[Register Failed]`, error);
  }
};

export const checkPermission = async (authToken) => {
  try {
    const response = await axios.get(`${authURL}/test-token`, {
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
    });
    return response.data.success;
  } catch (error) {
    console.error('[Check Permission Failed]', error);
  }
};
