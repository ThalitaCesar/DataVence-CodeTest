import React, {ChangeEvent, useContext, useEffect, useState} from 'react';
import {GlobalContext} from '../../context/GlobalState';
import Navbar from '../../components/Navbar/Navbar';
import {Box, Checkbox, CheckboxProps, Collapse, Container, FormHelperText, makeStyles, withStyles} from '@material-ui/core';
import {yupResolver} from '@hookform/resolvers/yup';
import {
    ButtonSubmit,
    CloseButton,
    DescriptionForm,
    ErrorCep,
    FileBox,
    FileInput,
    FormCep,
    Label,
    TitleForm
} from './styles';
import {Controller, useForm, SubmitHandler} from 'react-hook-form';
import axios from 'axios';
import {validationSchema} from './valitation';
import { Alert } from '@mui/material';

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

interface FormValues {
    name : string;
    cpf : string;
    email : string;
    neighborhood : string;
    cep : string;
    city : string;
    street : string;
    complement : string;
    state : string;
    number : string;
    plan : string;
    themes : string[];
    additionalInfo : string | null;
}

const themesArray = [
    'Romance',
    'Fantasia',
    'Biografia',
    'Mistério e Suspense',
    'Histórico',
    'Ficção Cientifica',
    'Romance Policial',
    'Aventura',
    'Literatura Clássica',
    'Grandes Poetas',
    'Arquitetura e Design',
    'Autodesenvolvimento',
    'Carreira',
    'Política'
];

const Form : React.FC = () => {
    const {viaCep} = useContext(GlobalContext);
    const [userCep,
        setUserCep] = useState < ViaCep | null > (viaCep);
    const [open,
        setOpen] = useState(false);
    const [openError, setOpenError] = useState(false);
    const [additionalInfoFile,
        setAdditionalInfoFile] = useState < File | null > (null);
    const [data,
        setData] = useState < FormValues > ({
        name: '',
        cpf: '',
        email: '',
        neighborhood: `${userCep
            ?.bairro}`,
        cep: `${userCep
            ?.cep}`,
        city: `${userCep
            ?.localidade}`,
        street: `${userCep
            ?.logradouro}`,
        complement: '',
        state: `${userCep
            ?.uf}`,
        number: '',
        plan: '',
        themes: [],
        additionalInfo: ''
    });

    const {handleSubmit, control, formState: {
            errors
        }, setValue} = useForm < FormValues > ({resolver: yupResolver(validationSchema)});

    useEffect(() => {
        if (userCep) {
            setValue('cep', userCep.cep);
            setValue('neighborhood', userCep.bairro);
            setValue('city', userCep.localidade);
            setValue('street', userCep.logradouro);
            setValue('state', userCep.uf)
        }
    }, [userCep, setValue]);

    useEffect(() => {
        if (additionalInfoFile) {
            setValue('additionalInfo', URL.createObjectURL(additionalInfoFile))
        }
    }, [additionalInfoFile, setValue]);

    const handleFormSubmit : SubmitHandler < FormValues > = async(data) => {
        try {
            await axios.post('http://api.webhookinbox.com/i/4sQxDkRy/in/', data);
            setOpen(true);
            setOpenError(false);
        } catch (error) {
            setOpenError(true);
            setOpen(false);
        }

        console.log(data);
    };

    return (
        <Container>
            <Navbar/> {!viaCep
                ? (
                    <ErrorCep>Cep não encontrado!</ErrorCep>
                )
                : (
                    <>
                    <TitleForm>Cadastro</TitleForm>
                    <DescriptionForm>Escolha seu plano e inscreva-se no site, ao ser cadastrado você receberá uma senha exclusiva para acesso ao site, pagamento e informações pessoais e dos livros enviados.</DescriptionForm>
                    <FormCep onSubmit={handleSubmit(handleFormSubmit)}>

                        <Label>Nome completo
                            <span> (Obrigatório)</span>:
                        </Label>

                        <Controller
                            name="name"
                            control={control}
                            defaultValue={data.name}
                            render={props => (<input
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
                        <FormHelperText error={Boolean(errors
                            ?.name)}>
                            <span>{errors
                                    ?.name
                                        ?.message}</span>
                        </FormHelperText>

                        <Label>CPF
                            <span> (Obrigatório)</span>:</Label>
                        <Controller
                            name="cpf"
                            control={control}
                            defaultValue={data.cpf}
                            render={props => (<input
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
                        <FormHelperText error={Boolean(errors
                            ?.cpf)}>
                            {errors
                                ?.cpf
                                    ?.message}
                        </FormHelperText>

                        <Label>Email
                            <span> (Obrigatório)</span>:</Label>

                        <Controller
                            name="email"
                            control={control}
                            defaultValue={data.email}
                            render={props => (<input
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
                        <FormHelperText error={Boolean(errors
                            ?.email)}>
                            {errors
                                ?.email
                                    ?.message}
                        </FormHelperText>

                        <Label>CEP
                            <span> (Obrigatório)</span>:</Label>

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
                            {errors
                                ?.cep
                                    ?.message}
                        </FormHelperText>

                        <Label>Bairro
                            <span> (Obrigatório)</span>:</Label>

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
                        <FormHelperText
                            error={Boolean(errors
                            ?.neighborhood)}>
                            {errors
                                ?.neighborhood
                                    ?.message}
                        </FormHelperText>

                        <Label>Cidade
                            <span> (Obrigatório)</span>:</Label>
                        <Controller
                            name="city"
                            control={control}
                            defaultValue={userCep
                            ?.localidade}
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
                        <FormHelperText error={Boolean(errors
                            ?.city)}>
                            {errors
                                ?.city
                                    ?.message}
                        </FormHelperText>

                        <Label>Rua
                            <span> (Obrigatório)</span>:</Label>
                        <Controller
                            name="street"
                            control={control}
                            defaultValue={userCep
                            ?.logradouro}
                            render={props => (<input
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
                        <FormHelperText error={Boolean(errors
                            ?.street)}>
                            {errors
                                ?.street
                                    ?.message}
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
                        <FormHelperText
                            error={Boolean(errors
                            ?.complement)}>
                            {errors
                                ?.complement
                                    ?.message}
                        </FormHelperText>

                        <Label>Estado
                            <span> (Obrigatório):</span>
                        </Label>
                        <Controller
                            name="cep"
                            control={control}
                            defaultValue={userCep
                            ?.uf}
                            render={props => (<input
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
                        <FormHelperText error={Boolean(errors
                            ?.state)}>
                            {errors
                                ?.state
                                    ?.message}
                        </FormHelperText>

                        <Label>Número
                            <span> (Obrigatório)</span>:</Label>
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
                        <FormHelperText error={Boolean(errors
                            ?.number)}>
                            {errors
                                ?.number
                                    ?.message}
                        </FormHelperText>

                        <Label>Plano
                            <span> (Obrigatório)</span>:</Label>

                        <Controller
                            name="plan"
                            control={control}
                            defaultValue=""
                            render={props => (
                            <select
                                name="plan"
                                value={data.plan}
                                onChange={(e) => {
                                setData({
                                    ...data,
                                    plan: e.target.value
                                });
                                props
                                    .field
                                    .onChange(e.target.value);
                            }}>
                                <option value="" disabled>
                                    Selecione um plano
                                </option>
                                <option value="basic">Básico</option>
                                <option value="flex">Flex</option>
                                <option value="premium">Premium</option>
                            </select>
                        )}/>
                        <FormHelperText error={Boolean(errors
                            ?.plan)}>
                            {errors
                                ?.plan
                                    ?.message}
                        </FormHelperText>

                        <Label>Temas de Leitura Preferidos<span> (Obrigatório)</span>:</Label>
                        <Controller
                            name="themes"
                            control={control}
                            defaultValue={[]}
                            render={(props) => (
                            <div>
                                {themesArray.map((theme) => (
                                    <div key={theme}>
                                        <Checkbox
                                            defaultChecked
                                            name="themes"
                                            value={theme}
                                            checked={data
                                            .themes
                                            .includes(theme)}
                                            onChange={(e) => {
                                            const checked = e.target.checked;
                                            let updatedThemes = data.themes;
                                            if (checked) {
                                                updatedThemes.push(theme);
                                            } else {
                                                updatedThemes = updatedThemes.filter((t) => t !== theme);
                                            }
                                            setData({
                                                ...data,
                                                themes: updatedThemes
                                            });
                                            props
                                                .field
                                                .onChange(updatedThemes);
                                        }}
                                            
                                        />
                                        <label htmlFor={theme}>{theme}</label>
                                    </div>
                                ))}
                            </div>
                        )}/>

                        <FormHelperText error={Boolean(errors
                            ?.themes)}>
                            {errors
                                ?.themes
                                    ?.message}
                        </FormHelperText>

                        <Label>Informações Complementares
                            <span> aceito arquivos PNG, JPG, JPEG, GIF e PDF</span>
                            :
                        </Label>
                        {!additionalInfoFile
                            ? ( 
                            <> 
                            <Controller
                                name="additionalInfo"
                                control={control}
                                defaultValue={data
                                ?.additionalInfo}
                                render={(props) => (
                                <input
                                type="file"
                                accept="application/pdf, image/png, image/jpeg, image/jpg, image/gif"
                                id="additionalInfo"
                                name="additionalInfo"
                                style={{
                                display: "none"
                            }}
                                onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setAdditionalInfoFile(e.target.files[0])
                                    setData({
                                        ...data,
                                        additionalInfo: URL.createObjectURL(e.target.files[0])
                                    });
                                    props
                                        .field
                                        .onChange(URL.createObjectURL(e.target.files[0]));
                                }
                            }}/>)}/> 
                            < FormHelperText error = {
                                Boolean(errors
                                    ?.additionalInfo)
                            } > {
                                errors
                                    ?.additionalInfo
                                        ?.message
                            } 
                            </FormHelperText>
                        <FileInput>
                            <label
                                htmlFor="additionalInfo"
                                style={{
                                fontSize: '12px',
                                cursor: "pointer"
                            }}>
                                <u>Clique aqui
                                </u > <span>
                                 para adicionar informações complementares
                                </span> 
                                </label>
                        </FileInput > </>)
                            : (
                                <FileBox>
                                    {additionalInfoFile.name}
                                    <CloseButton onClick={() => setAdditionalInfoFile(null)}>x</CloseButton>
                                </FileBox>
                            )}

                        <ButtonSubmit style={{marginBottom:'20px'}}>Enviar Cadastro</ButtonSubmit>

                        <Box sx={{width: '100%'}}>
                            <Collapse in={open}>
                                <Alert variant="filled" severity="success">
                                    `Seu cadastro foi realizado com sucesso! Entraremos em contato em instantes com o email cadastrado {data.email} com a senha provisória informações para dar prosseguimento a compra.`
                                </Alert>
                            </Collapse>
                        </Box>
                        <Box sx={{width: '100%'}}>
                            <Collapse in={openError}>
                                <Alert variant="filled" severity="error">
                                Não foi possível realizar o cadastro. Reveja as informações e tente novamente.
                                </Alert>
                            </Collapse>
                        </Box>

                    </FormCep>
                    </>
                )}

        </Container>
    );
};

export default Form;
