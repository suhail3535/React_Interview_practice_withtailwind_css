import  { useEffect, useState } from "react";
import axios from "axios";
const Lazy = () => {
  const [product, setProduct] = useState([]);
  const getAllProduct = async () => {
    try {
      let res = await axios.get(
        "https://rct-211project.onrender.com/allProductMenWomen"
      );
      setProduct(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px"}}>
      {product?.map((ele) => {
        return (
          <div key={ele.id}>
          <img loading="lazy" src={ele.image} alt={ele.name} />
            <h1>{ele.name}</h1>
            <h3>{ele.brand}</h3>
            <h4>{ele.price}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Lazy;
