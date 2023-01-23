import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CryptoContext } from "../Context/context";
const HomePage = () => {
  const [data, setData] = useState();

  const { apiKey, baseUrl, urlParms } = useContext(CryptoContext);

  useEffect(() => {
    axios.get(`${baseUrl}/${urlParms}${apiKey}`).then((respone) => {
      console.log(respone.data.Data);
      setData(respone.data.Data);
    });
  }, [baseUrl, urlParms, apiKey]);
  return (
    <div>
      {data?.map((e) => {
        return (
          <div>
            <img
              src={`https://raw.githubusercontent.com/cjdowner/cryptocurrency-icons/master/32/color/${e.CoinInfo.Name.toLowerCase()}.png`}
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
