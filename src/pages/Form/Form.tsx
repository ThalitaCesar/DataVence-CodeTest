import React, { useContext, useState } from 'react';
import api from '../../services/api';
import { GlobalContext } from '../../context/GlobalState';
import Navbar from '../../components/Navbar/Navbar';
import { Container } from '@material-ui/core';

interface ViaCep {
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
}

const Form: React.FC = () => {
  const { viaCep } = useContext(GlobalContext);
  const [userCep, setUserCep] = useState<ViaCep | null >(viaCep);
  if (!viaCep) {
    throw new Error("Cep não encontrado.");
  }
  console.log(userCep);

  return (
    <Container>
      <Navbar />
      <div>{userCep?.bairro}</div>
    </Container>
  );
};

export default Form;
