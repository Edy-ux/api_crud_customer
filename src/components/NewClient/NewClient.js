import React, { useContext } from 'react';
import '../../Login.css';
import { MyContext } from '../../context/context';

const NewClient = () => {

  const { setFormData, formData, createMerchant } = useContext(MyContext);

  const handleFormData = event => {
    const { id, value } = event.target
    setFormData((prevForm) => Object.assign({}, prevForm, { [id]: value }))
  }

  console.log(formData);
  return (
    <div className="login">
      <div className="login__container">
        <h3>+ Add</h3>
        <form onSubmit={createMerchant} name="loginForm">
          <center>
            <input
              type="text"
              value={formData?.name}
              id='name'
              placeholder="Nome"
              onChange={handleFormData}
              required
            // data-key='name'
            />
          </center>
          <center>
            <input
              type="text"
              value={formData?.email}
              name="email"
              id='email'
              // data-key='email'
              placeholder="Email"
              onChange={handleFormData}
              required
            />
          </center>
          <center>
            <input
              type="text"
              placeholder="Telefone"
              value={formData?.phone}
              id='phone'
              name="phone"
              // data-key='phone'
              onChange={handleFormData}
              maxLength="14"

              required
            />
          </center>

          <center>
            <button type="submit" className="login__login">
              Adicionar
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default NewClient;
