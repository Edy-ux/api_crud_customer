import React from 'react';

const Client = ({ merchants, trash, getMerchant }) => {
  function deleteMerchant(id) {
    const confirme = window.confirm('Confirmar exclusão?');
    if (!confirme) return;
    fetch(`http://192.168.192.211:3002/merchants/${id}`, {
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
    <>
      <table id="data-table">
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
              <td class="description">{merchant.name}</td>
              <td class="income">{merchant.email}</td>
              <td class="date">{merchant.phone}</td>
              <td>
                <img
                  style={{ width: '25px', height: '25px' }}
                  src={trash}
                  alt="remover cliente"
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
