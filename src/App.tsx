import React from 'react';
import {GlobalStyle} from './styles/global';
import GlobalState from './context/GlobalState';
import {BrowserRouter} from 'react-router-dom';
import Routers from './routers';

export function App() {

    return (
        <BrowserRouter>
            <GlobalState>
                <Routers/>
                <GlobalStyle/>
            </GlobalState>
        </BrowserRouter>
    );
}

export default App;