import React, {useContext, useState} from 'react';
import api from '../../services/api';
import {GlobalContext} from '../../context/GlobalState';
import Navbar from '../../components/Navbar/Navbar';
import {Container} from '@material-ui/core';
import useForm from '../../customHooks/useForm';

interface ViaCep {
    bairro : string;
    cep : string;
    complemento : string;
    ddd : string;
    gia : string;
    ibge : string;
    localidade : string;
    logradouro : string;
    siafi : string;
    uf : string;
}

const Form = () => {
    const {viaCep} = useContext(GlobalContext);
    const [userCep,
        setUserCep] = useState < ViaCep | null > (viaCep);
    if (!viaCep) {
        throw new Error("Cep não encontrado.");
    }
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm();

    return (
        <Container>
            <Navbar/>
            <form onSubmit={handleSubmit}>
                city: string; street: string; complement: string; state: string; number: string;
                <input
                    name="name"
                    placeholder="Nome Completo"
                    value={values.name || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                <input
                    name="cpf"
                    placeholder="Cpf"
                    value={values.cpf || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                <input
                    name="email"
                    placeholder="Email"
                    value={values.email || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                <input
                    name="cep"
                    placeholder="Cep"
                    value={values.cep || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                <input
                    name="neighborhood"
                    placeholder="Bairro"
                    value={values.neighborhood || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}/>

                <input
                    name="name"
                    placeholder="Nome Completo"
                    value={values.name || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}/>

                <input
                    name="name"
                    placeholder="Nome Completo"
                    value={values.name || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}/>

                <input
                    name="name"
                    placeholder="Nome Completo"
                    value={values.name || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}/>

                <input
                    name="name"
                    placeholder="Nome Completo"
                    value={values.name || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                <button>Enviar Cadastro</button>
            </form>
        </Container>
    );
};

export default Form;
