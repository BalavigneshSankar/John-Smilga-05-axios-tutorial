import { useEffect } from "react";
import authFetch from "../axios/custom";

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const res = await authFetch("/react-store-products");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">custom instance</h2>;
};
export default CustomInstance;
