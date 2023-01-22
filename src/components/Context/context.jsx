import React, { createContext, useState } from "react";

const CryptoContext = createContext();
export { CryptoContext };
const Context = (props) => {
  const apiKey =
    "&api_key=7e99e29f083fff3dc72a4f6faf7814836a9f61425da445b8d3c8bfeb09fd1d3e";
  const baseUrl = "https://min-api.cryptocompare.com/data";
  const [urlParms, setUrlParms] = useState(
    "top/totalvolfull?limit=10&tsym=USD"
  );

  return (
    <CryptoContext.Provider value={{ apiKey, baseUrl, urlParms, setUrlParms }}>
      {props.children}
    </CryptoContext.Provider>
  );
};
export default Context;
