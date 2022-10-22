import React, { useContext, useState } from 'react';
import '../../Login.css';
import { MyContext } from '../../context/context';

const NewClient = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    createMerchant,
  } = useContext(MyContext);

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
