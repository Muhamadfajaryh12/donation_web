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

  const getCampaign = async () => {
    try {
      const response = await axios.get(BASE_URL);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const getDetailCampaign = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const getCampaignByYayasan = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/yayasan/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getCampaignByCategory = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}?category_id=${id}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const getCampaignBySearch = async (keyword) => {
    try {
      const response = await axios.get(`${BASE_URL}?search=${keyword}`);
      console.log(keyword);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    createCampaign,
    getCampaign,
    getDetailCampaign,
    getCampaignByYayasan,
    getCampaignByCategory,
    getCampaignBySearch,
  };
})();

export default campaignAPI;
