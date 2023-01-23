import React, { createContext, useState } from "react";

const CryptoContext = createContext();
export { CryptoContext };
const Context = (props) => {
  const apiKey = "5840f4f8-dfbc-4361-98e0-9855a07142ef";
  const baseUrl = "'https://pro-api.coinmarketcap.com/v1/cryptocurrency/";
  const [urlParms, setUrlParms] = useState("listings/latest");

  return (
    <CryptoContext.Provider value={{ apiKey, baseUrl, urlParms, setUrlParms }}>
      {props.children}
    </CryptoContext.Provider>
  );
};
export default Context;
