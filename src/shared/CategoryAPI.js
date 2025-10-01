import axios from "axios";

const CategoryAPI = (() => {
  const BASE_URL = `${import.meta.env.VITE_API_URL}/category`;

  const getCategory = async () => {
    try {
      const response = await axios.get(BASE_URL);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return { getCategory };
})();
export default CategoryAPI;
