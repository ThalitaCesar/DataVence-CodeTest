import styled from "styled-components";


export const FormCep = styled.form`
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
margin-bottom:60px;
`

export const Label = styled.p`
color: var(--text-title);
font-size: 14px;
text-align:start;
margin-top:20px;
`

export const ButtonSubmit = styled.button`
width:449px;
margin-top:20px;
@media (max-width: 720px) {
    width:349px;
  }
`

export const FileInput = styled.div`
padding: 17px 22px;
background: none;
width: 449px;
height: 60px;
text-align:center;
border: 1px solid var(--gray);
border-radius: 35px;
margin:16px;
@media (max-width: 720px) {
    width:349px;
  }
`

export const FileBox = styled.div`
  display: flex;
  justify-content:space-between;
  padding: 22px 22px;
  background: none;
  width: 449px;
  border: 1px solid var(--gray);
  border-radius: 35px;
  margin: 16px;
  @media (max-width: 720px) {
    width: 349px;
  }
`;

export const CloseButton = styled.button`
  margin-left:10px;
  height: 40px;
`;
