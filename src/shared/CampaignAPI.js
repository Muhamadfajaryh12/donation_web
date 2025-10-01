import axios from "axios";

const campaignAPI = (() => {
  const BASE_URL = `${import.meta.env.VITE_API_URL}/campaign`;

  const getToken = localStorage.getItem("token");
  const createCampaign = async (formData) => {
    try {
      const response = await axios.post(BASE_URL, formData, {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${getToken}`,
        },
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  };
  return { createCampaign };
})();

export default campaignAPI;
