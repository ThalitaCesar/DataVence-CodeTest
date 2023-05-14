import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Navbar from '../../components/Navbar/Navbar';
import { Container, FormHelperText } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormCep, Label } from './styles';
import { validationSchema } from './valitation';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';


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

interface FormValues {
  name: string;
  cpf: string;
  email: string;
  neighborhood: string;
  cep: string;
  city: string;
  street: string;
  complement: string;
  state: string;
  number: string;
}

const Form: React.FC = () => {
  const { viaCep } = useContext(GlobalContext);
  const [userCep, setUserCep] = useState<ViaCep | null>(viaCep);
  const [data, setData] = useState<FormValues>({
    name: '',
    cpf: '',
    email: '',
    neighborhood: `${userCep?.bairro}`,
    cep: `${userCep?.cep}`,
    city: `${userCep?.localidade}`,
    street: `${userCep?.logradouro}`,
    complement: '',
    state: `${userCep?.uf}`,
    number: '',
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue
  } = useForm<FormValues>({ resolver: yupResolver(validationSchema) });
  
  useEffect(() => {
    if (userCep) {
      setValue('cep', userCep.cep);
      setValue('neighborhood', userCep.bairro);
      setValue('city', userCep.localidade);
      setValue('street', userCep.logradouro);
      setValue('state', userCep.uf);
    }
  }, [userCep, setValue]);

  const handleFormSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      alert(
        `Foi enviado uma mensagem para o email cadastrado ${data.email} com as informações para dar prosseguimento ao cadastro.`
      );
    } catch (error) {
      alert(
        'Não foi possível realizar o cadastro. Reveja as informações e tente novamente.'
      );
    }

    console.log(data);
  };

    return (
        <Container>
            <Navbar/>
            { !viaCep ? (
              <p>Cep não encontrado</p>
            ): (
            <FormCep onSubmit={handleSubmit(handleFormSubmit)}>
                <Label>Nome completo
                <span>(Obrigatório)</span>:
                </Label>

                <Controller
                    name="name"
                    control={control}
                    defaultValue={data.name}
                    render={props => (
                    <input
                    type="text"
                    defaultValue={data.name}
                    maxLength={100}
                    placeholder='Insira aqui seu nome completo'
                    name="nameModule"
                    onChange={(e) => {
                    setData({
                        ...data,
                        name: e.target.value
                    });
                    props
                        .field
                        .onChange(e.target.value)
                }}/>)}/>
               <FormHelperText error={Boolean(errors?.name)}>
              <span>{errors?.name?.message}</span>
              </FormHelperText>

                <Label>CPF
                    <span>(Obrigatório)</span>:</Label>
                <Controller
                    name="cpf"
                    control={control}
                    defaultValue={data.cpf}
                    render={props => (
                    <input
                    name="cpf"
                    maxLength={11}
                    pattern="[0-9]{11}"
                    placeholder="O CPF deve conter apenas números"
                    value={data.cpf}
                    onChange={(e) => {
                    setData({
                        ...data,
                        cpf: e.target.value
                    });
                    props
                        .field
                        .onChange(e.target.value)
                }}/>)}/>
                <FormHelperText error={Boolean(errors?.cpf)}>
                    {errors?.cpf?.message}
                </FormHelperText>

                <Label>Email
                    <span>(Obrigatório)</span>:</Label>

                <Controller
                    name="email"
                    control={control}
                    defaultValue={data.email}
                    render={props => (
                    <input
                    name="email"
                    placeholder="Email"
                    pattern="[a-zA-Z0-9._-]{1,64}@[a-zA-Z0-9.-]{1,}\.[a-zA-Z]{2,}"
                    value={data.email}
                    onChange={(e) => {
                    setData({
                        ...data,
                        email: e.target.value
                    });
                    props
                        .field
                        .onChange(e.target.value)
                }}/>)}/>
                <FormHelperText error={Boolean(errors?.email)}>
                    {errors?.email?.message}
                </FormHelperText>

                <Label>CEP
                    <span>(Obrigatório)</span>:</Label>

                <Controller
                    name="cep"
                    control={control}
                    defaultValue={userCep
                    ?.cep}
                    render={props => (<input
                    name="cep"
                    placeholder="Insira aqui o cep"
                    pattern="[0-9]{5}-[0-9]{3}"
                    value={userCep
                    ?.cep}
                    onChange={(e) => {
                    setData({
                        ...data,
                        cep: e.target.value
                    });
                    props
                        .field
                        .onChange(e.target.value)
                }}/>)}/>
                <FormHelperText error={Boolean(errors
                    ?.cep)}>
                    {errors?.cep?.message}
                </FormHelperText>

                <Label>Bairro
                    <span>(Obrigatório)</span>:</Label>

                <Controller
                    name="neighborhood"
                    control={control}
                    defaultValue={userCep
                    ?.bairro}
                    render={props => (<input
                    name="neighborhood"
                    placeholder="Insira aqui o bairro"
                    value={userCep
                    ?.bairro}
                    onChange={(e) => {
                    setData({
                        ...data,
                        neighborhood: e.target.value
                    });
                    props
                        .field
                        .onChange(e.target.value)
                }}/>)}/>
                <FormHelperText error={Boolean(errors
                    ?.neighborhood)}>
                    {errors?.neighborhood?.message}
                </FormHelperText>

                <Label>Cidade
                    <span>(Obrigatório)</span>:</Label>
                <Controller
                    name="city"
                    control={control}
                    defaultValue={userCep?.localidade}
                    render={props => (
                    <input
                    name="city"
                    placeholder="Insira aqui a cidade"
                    required
                    value={userCep
                    ?.localidade}
                    onChange={(e) => {
                    setData({
                        ...data,
                        city: e.target.value
                    });
                    props
                        .field
                        .onChange(e.target.value)
                }}/>)}/>
                <FormHelperText error={Boolean(errors?.city)}>
                    {errors?.city?.message}
                </FormHelperText>

                <Label>Rua
                    <span>(Obrigatório)</span>:</Label>
                <Controller
                    name="street"
                    control={control}
                    defaultValue={userCep
                    ?.logradouro}
                    render={props => (
                    <input
                    name="street"
                    placeholder="Insira aqui sua rua"
                    value={userCep
                    ?.logradouro}
                    onChange={(e) => {
                    setData({
                        ...data,
                        street: e.target.value
                    });
                    props
                        .field
                        .onChange(e.target.value)
                }}/>)}/>
                <FormHelperText error={Boolean(errors?.street)}>
                    {errors?.street?.message}
                </FormHelperText>

                <Label>Complemento:</Label>
                <Controller
                    name="complement"
                    control={control}
                    defaultValue={data.complement}
                    render={props => (<input
                    name="complement"
                    placeholder="Insira aqui o complemento"
                    value={data.complement}
                    onChange={(e) => {
                    setData({
                        ...data,
                        complement: e.target.value
                    });
                    props
                        .field
                        .onChange(e.target.value)
                }}/>)}/>
                <FormHelperText error={Boolean(errors?.complement)}>
                    {errors?.complement?.message}
                </FormHelperText>

                <Label>Estado
                    <span>(Obrigatório):</span>
                </Label>
                <Controller
                    name="cep"
                    control={control}
                    defaultValue={userCep
                    ?.uf}
                    render={props => (
                    <input
                    name="state"
                    placeholder="Insira aqui o estado"
                    value={userCep
                    ?.uf}
                    onChange={(e) => {
                    setData({
                        ...data,
                        state: e.target.value
                    });
                    props
                        .field
                        .onChange(e.target.value)
                }}/>)}/>
                <FormHelperText error={Boolean(errors?.state)}>
                    {errors?.state?.message}
                </FormHelperText>

                <Label>Número
                    <span>(Obrigatório)</span>:</Label>
                <Controller
                    name="number"
                    control={control}
                    defaultValue={data.number}
                    render={props => (<input
                    name="number"
                    placeholder="Insira aqui seu número"
                    value={data.number}
                    onChange={(e) => {
                    setData({
                        ...data,
                        number: e.target.value
                    });
                    props
                        .field
                        .onChange(e.target.value)
                }}/>)}/>
                <FormHelperText error={Boolean(errors?.number)}>
                    {errors?.number?.message}
                </FormHelperText>

                <button>Enviar Cadastro</button>
            </FormCep>
            )}
        </Container>
    );
};

export default Form;
