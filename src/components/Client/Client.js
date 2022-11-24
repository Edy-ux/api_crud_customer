import React, { useContext } from 'react';
import { MyContext } from '../../context/context';

const Client = ({ merchants, trash }) => {
  const { deleteMerchant } = useContext(MyContext);
  return (
    <>
      <table className="data-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {merchants.map((merchant) => (
            <tr key={merchant.id}>
              <td >{merchant.name}</td>
              <td >{merchant.email}</td>
              <td >{merchant.phone}</td>
              <td>
                <img
                  style={{ width: '25px', height: '25px' }}
                  src={trash}
                  alt="remover cliente"
                  title='remover cliente'
                  onClick={() => deleteMerchant(merchant.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Client;
