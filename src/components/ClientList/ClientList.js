import React, { useState, useEffect, useContext} from 'react';
import './ClientList.css';
import trash from '../../assets/trash.svg'
import Client from '../Client/Client';
import { MyContext } from '../context/context';  

export const ClientList = () => {


  const { getMerchant, merchants} = useContext(MyContext);  
  // console.log(getMerchant);
 
  return (
    <>
      <main class="container">
        <section id="client_list">
          <h2 class="sr-only">Clientes</h2>
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

