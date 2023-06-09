import { useEffect } from "react";
import authFetch from "../axios/interceptor";

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const res = await authFetch("/react-store-productss");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};
export default Interceptors;
