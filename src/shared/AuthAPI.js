import axios from "axios";

const AuthAPI = (() => {
  const BASE_URL = `${import.meta.env.VITE_API_URL}`;
  const getToken = localStorage.getItem("token");
  const register = async ({ email, password, role, name }) => {
    console.log(BASE_URL);
    try {
      const response = await axios.post(`${BASE_URL}/register`, {
        email,
        password,
        role,
        name,
      });
      return response;
    } catch (error) {
      return error.response.data;
    }
  };

  const login = async ({ email, password }) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      console.log(response);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  };

  const getProfile = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const sendVerification = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/verify-send?authKey=${getToken}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    register,
    login,
    sendVerification,
    getProfile,
  };
})();

export default AuthAPI;
