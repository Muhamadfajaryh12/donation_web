import axios from "axios";

const dashboardAPI = (() => {
  const BASE_URL = import.meta.env.VITE_API_URL + "/dashboard";

  const getSummayCampaign = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return { getSummayCampaign };
})();

export default dashboardAPI;
