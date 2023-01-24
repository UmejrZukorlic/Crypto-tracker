import React, { createContext, useState } from "react";

const CryptoContext = createContext();
export { CryptoContext };
const Context = (props) => {
  const baseUrl = "https://api.coingecko.com/api/v3/";
  const [urlParms, setUrlParms] = useState(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  return (
    <CryptoContext.Provider value={{ baseUrl, urlParms, setUrlParms }}>
      {props.children}
    </CryptoContext.Provider>
  );
};
export default Context;
