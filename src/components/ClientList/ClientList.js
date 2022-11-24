import React, { useContext } from 'react';
import './ClientList.css';
import trash from '../../assets/minus.svg';
import Client from '../Client/Client';
import { MyContext } from '../../context/context';

export const ClientList = () => {
  const { getMerchant, merchants } = useContext(MyContext);

  return (
    <>
      <main className="container">
        <section className="client_list">
          <h2>Clientes</h2>
          <Client
            merchants={merchants}
            trash={trash}
            getMerchant={getMerchant}
          />
        </section>
      </main>
    </>
  );
};
