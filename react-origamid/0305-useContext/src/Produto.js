import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const { dados, limparDados } = React.useContext(GlobalContext);
  console.log(dados);
  return (
    <p>
      <button onClick={() => limparDados()}>Adicionar</button>
    </p>
  );
};

export default Produto;
