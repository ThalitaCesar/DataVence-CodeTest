import React, { createContext, useContext, useState } from "react";

type ViaCepData = {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
};

type GlobalStateContextType = {
  viaCep: ViaCepData | null;
  setViaCep: React.Dispatch<React.SetStateAction<ViaCepData | null>>;
};

export const GlobalContext = createContext<GlobalStateContextType>(
  {} as GlobalStateContextType
);

export const useStateContext = (): GlobalStateContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useStateContext must be used within a GlobalStateProvider");
  }
  return context;
};

const GlobalState: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [viaCep, setViaCep] = useState<ViaCepData | null>(null);

  return (
    <GlobalContext.Provider value={{ viaCep, setViaCep }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
