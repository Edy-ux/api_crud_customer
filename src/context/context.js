import { createContext, useEffect, useState } from 'react';

export const MyContext = createContext({});

export const MyProvider = ({ children }) => {
  const [merchants, setMerchants] = useState([]);
  //get data.
  useEffect(() => {
    getMerchant();
  }, []);
  async function getMerchant() {
    await fetch('http://192.168.192.211:3002')
      .then((data) => {
        return data.text();
      })
      .then((data) => {
        setMerchants(JSON.parse(data));
      });
  }

  return (
    <MyContext.Provider value={{ getMerchant, merchants }}>
      {children}
    </MyContext.Provider>
  );
};
