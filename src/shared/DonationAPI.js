import axios from "axios";

const DonationAPI = (() => {
  const BASE_URL = import.meta.env.VITE_API_URL + "/donation";
  const getToken = localStorage.getItem("token");
  const createDonation = async ({ name, message, donation, campaign_id }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}`,
        { name, message, donation, campaign_id },
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

  const getHistoryDonation = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/history`, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    createDonation,
    getHistoryDonation,
  };
})();
export default DonationAPI;
