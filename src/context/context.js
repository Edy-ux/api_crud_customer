import React, { createContext, useEffect, useState } from 'react';
export const MyContext = createContext({});

export const MyProvider = ({ children }) => {
  const [merchants, setMerchants] = useState([]);
  const [formData, setFormData] = useState({});
  useEffect(() => {
    getMerchant();
  }, []);

  async function getMerchant() {
    await fetch('http://192.168.1.3:3001', {
      method: 'GET',
    })
      .then((data) => {
        return data.text();
      })
      .then((data) => {
        setMerchants(JSON.parse(data));
      }).catch((err) => { console.log(err.message) })
  }

  async function createMerchant(event) {
    event.preventDefault();
    // const {name, email, phone} = document.forms.loginForm
    await fetch('http://192.168.1.3:3001/merchants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
      //
    }).then(() => {
      alert('Cliente cadastrado com sucesso!');
      setFormData({ name: '', email: '', phone: '' });
      getMerchant();
    });
  }

  async function deleteMerchant(id) {
    const confirme = window.confirm('Confirmar exclusão?');
    if (!confirme) return;
    await fetch(`http://192.168.1.3:3001/merchants/${id}`, {
      method: 'DELETE',
    })
      .then((data) => { 
        return data.text();
      })
      .then((data) => {
        getMerchant();
      });
  }

  return (
    <MyContext.Provider
      value={{
        merchants,
        setMerchants,
        setFormData,
        formData,
        createMerchant,
        getMerchant,
        deleteMerchant,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
