import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = ({ url, auth = false }) => {
  const [state, setState] = useState({
    data: [],
    loading: false,
    error: null,
  });
  const BASE_URL = import.meta.env.VITE_API_URL + url;
  useEffect(() => {
    const fetchingData = async () => {
      setState((prev) => ({ ...prev, loading: true }));

      try {
        const getToken = localStorage.getItem("token");

        const options = auth && {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        };

        const response = await axios.get(BASE_URL, options);
        setState({
          data: response.data.data,
          loading: false,
          error: null,
        });
      } catch (error) {
        setState({ data: [], loading: false, error: error });
      }
    };
    fetchingData();
  }, [url, auth]);

  return state;
};

export default useFetch;
