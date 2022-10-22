import { createContext, useEffect, useState } from 'react';

export const MyContext = createContext({});

export const MyProvider = ({ children }) => {
  const [merchants, setMerchants] = useState([]);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
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
  async function createMerchant(event) {
    event.preventDefault();

    await fetch('http://192.168.192.211:3002/merchants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone }),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getMerchant()
      });
  }

  const myStoreContext = {merchants, setMerchants, name, setName, email, setEmail, phone, setPhone, createMerchant}
  return (
    <MyContext.Provider value={myStoreContext}>
      {children}
    </MyContext.Provider>
  );
};
