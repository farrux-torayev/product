import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./components/loading";
import Card from "./components/card";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    async function fetchProduct() {
      try{
      setIsLoading(true);
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
      }
      catch(err){
        console.log(err.message);
        
      setErrorMsg(err.message)
      }
      finally{
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, []);


  return (
    <>
    {errorMsg && <div className="text-red-600 text-2xl text-center font-bold ">{errorMsg}</div>}
      <div className="grid  m-auto  grid-cols-3 w-[600px]  gap-[12px]">
        {isLoading && <Loading />}
        {products.map((item) => (
          <Card item={item} className="" />
        ))}
      </div>
    </>
  );
};

export default App;

