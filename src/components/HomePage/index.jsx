import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CryptoContext } from "../Context/context";
const HomePage = () => {
  const mainUrl = "cryptocompare.com";
  const [data, setData] = useState();

  const { apiKey, baseUrl, urlParms } = useContext(CryptoContext);

  useEffect(() => {
    axios.get(`${baseUrl}${urlParms}${apiKey}`).then((respone) => {
      console.log(respone.data.Data);
      setData(respone.data.Data);
    });
  }, []);
  return (
    <div>
      {data?.map((e) => {
        return (
          <div>
            <img
              src={mainUrl + e.CoinInfo.ImageUrl}
              alt={e.CoinInfo.FullName}
            />
            <h1>{e.CoinInfo.FullName}</h1>
            <p>{e.DISPLAY.USD.PRICE}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
