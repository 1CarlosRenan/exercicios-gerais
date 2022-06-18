import React from 'react';
import { useEffect } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(0);

  useEffect(() => {
    const fetchDados = fetch(`https://ranekapi.origamid.dev/json/api/produto/`)
      .then((r) => r.json())
      .then((json) => setDados(json));
  }, []);

  const limparDados = () => {
    setDados(0);
    console.log(dados);
  };

  return (
    <GlobalContext.Provider value={{ dados, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
