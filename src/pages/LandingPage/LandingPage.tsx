import React, {useContext, useState} from 'react'
import api from '../../services/api';
import {GlobalContext} from '../../context/GlobalState';
import {useNavigate} from 'react-router';
import books from '../../assets/about-books.webp'
import {Box, Collapse, Container} from '@material-ui/core'
import {HorizontalFlex, ImgLanding, Input, InputCep, LandingInfos} from './styles';
import Navbar from '../../components/Navbar/Navbar';
import { Alert } from '@mui/material';

const LandingPage = () => {

    const [userCep,
        setUserCep] = useState('');
    const {viaCep, setViaCep} = useContext(GlobalContext)
    const navigate = useNavigate();
    const [openError, setOpenError] = useState(false);

    const handleChange = (event : React.ChangeEvent < HTMLInputElement >) => {
        const numberCep = event
            .target
            .value
            .replace(/\D/g, '');
        setUserCep(numberCep);
    };

    async function getCEP() {
        if (userCep === '') {
          setOpenError(true);
          setUserCep('');
          return;
        }
        const numberCep = userCep.replace(/\D/g, ''); 
        try {
          const response = await api.get(`/${numberCep}/json`);
          console.log(response.data);
          setViaCep(response.data);
          setOpenError(false);
          navigate('/form');
        } catch (error) {
          console.log('ERROR: ' + error);
          setOpenError(true);
          setUserCep('');
          return;
        }
      }

      const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          getCEP();
        }
      };

    return (
        <Container>
            <Navbar/>
            <HorizontalFlex>
                <LandingInfos>
                    <h1>Seu portal para uma jornada literária inesquecível</h1>
                    <p>Aqui, a leitura ganha vida e você embarca em uma experiência única de
                        descoberta literária. Com nossa assinatura mensal, você receberá um livro
                        cuidadosamente selecionado de acordo com suas preferências diretamente em sua
                        porta.</p>

                    <InputCep>
                        <Input 
                        type="text" 
                        value={userCep}  
                        placeholder="Cep, apenas números..."
                        pattern="[0-9]{8}" 
                        onChange={handleChange} 
                        onKeyPress={handleKeyPress} />
                        <button onClick={getCEP}>Assinar</button>
                    </InputCep>
                    <Box sx={{width: '90%', marginTop:"20px"}}>
                            <Collapse in={openError}>
                                <Alert variant="outlined" severity="error">
                                Insira um cep válido
                                </Alert>
                            </Collapse>
                        </Box>
                </LandingInfos>
                <ImgLanding src={books}/>
            </HorizontalFlex>
        </Container>
    )
}

export default LandingPage
