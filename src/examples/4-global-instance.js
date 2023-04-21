import { useEffect } from "react";
import axios from "axios";

const productsUrl = "https://course-api.com/react-store-products";

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const res = await axios(productsUrl);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">global instance</h2>;
};
export default GlobalInstance;
