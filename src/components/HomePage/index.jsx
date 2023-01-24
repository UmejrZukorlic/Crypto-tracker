import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CryptoContext } from "../Context/context";

const HomePage = () => {
  const [data, setData] = useState();

  const { baseUrl, urlParms } = useContext(CryptoContext);

  useEffect(() => {
    axios.get(`${baseUrl}${urlParms}`).then((respone) => {
      console.log(respone.data);
      setData(respone.data);
    });
  }, [baseUrl, urlParms]);
  return (
    <div>
      {data?.map((e, i) => {
        return (
          <div key={i}>
            <h1>{e.name}</h1>
            <img src={e.image} alt={e.id} />
            <p>{e.current_price}$</p>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
