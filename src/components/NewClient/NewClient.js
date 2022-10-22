import React, { useContext, useState, useEffect } from 'react';
import '../../Login.css';
import { MyContext } from '../../context/context';

const NewClient = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
 
  const { getMerchant } = useContext(MyContext);



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

  return (
    <div className="login">
      <div className="login__container">
        <h3>Novo cadastro</h3>
        <form onSubmit={createMerchant}>
          <center>
            <input
              type="text"
              value={name}
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </center>
          <center>
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </center>
          <center>
            <input
              type="text"
              placeholder="Telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </center>

          <center>
            <button type="submit" class="login__login">
              Adicionar
            </button>
          </center>
          <center></center>
        </form>
      </div>
    </div>
  );
};

export default NewClient;
