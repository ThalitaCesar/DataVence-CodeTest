import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle `
:root{
    --background:#0F172A;
    --blue: #2563EB;
    --blue-gray:#1E293B;
    --gray: #334155;
    --text-title: #ffffff;
    --text-body:#94A3B8;
}
 *{
    margin:0;
    padding:0;
    box-sizing:border-box;
 }
html{
    @media(max-width: 1000px){
        font-size: 93.75%
    }
    @media(max-width: 720px){
        font-size: 87.05%
    }
}
 body{
    background: var(--background);
 }
 body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: var(--text-body);
input{
    padding: 17px 22px;
    background: none;
    width: 449px;
    height: 60px;
    border: 1px solid var(--gray);
    border-radius: 35px;
    margin:16px;

};
textarea:focus, input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}
 }
 h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
    color: var(--text-title);
 }
 button{
    cursor:pointer;
    display: flex;
    border:none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    background: var(--blue);
    border-radius: 50px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    color: var(--text-title);
 }
 button:hover{
    background: var(--blue-gray);
}
 a{
    text-decotarion:none;
    cursor: pointer;
    color: var(--blue)
 }
[disable]{
    visable:0.6;
    cursor: not-allowed;
}
`