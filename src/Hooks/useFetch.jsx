import React, { useEffect, useState } from "react";
import api from "../Api";

const useFetch = (initialData) => {
  const [data, setData] = useState(initialData);
  const [moreData, setMoreData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function get(url) {
    try {
      setLoading(true);
      setError(null);
      const response = await api.get(url);
      setData(response.data);
      if (data?.data?.data && Array.isArray(response?.data?.data)) {
        setMoreData((prev) => [...prev, ...response.data.data]);
      }
    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  }

  async function post(url, requestData) {
    try {
      setLoading(true);
      setError(null);
      const response = await api.post(url, requestData);
      setData(response);
      if (response?.data?.message == "Booking successful") {
        localStorage.setItem("successMsg", "Booking successful");
      } else {
        localStorage.setItem("successMsg", "Failed");
      }
    } catch (error) {
      setError(error);
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  return { data, error, loading, get, post, moreData };
};
export default useFetch;
