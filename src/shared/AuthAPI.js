import axios from "axios";

const AuthAPI = (() => {
  const BASE_URL = `${import.meta.env.VITE_API_URL}`;
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
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  };
  return {
    register,
    login,
  };
})();

export default AuthAPI;
