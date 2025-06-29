import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://157.230.240.97:9999/api/v1",
  withCredentials: true,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
