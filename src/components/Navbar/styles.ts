import {AppBar, Button, IconButton, Toolbar} from "@material-ui/core";
import styled from "styled-components";

export const StyledAppBar = styled(AppBar)`
  && {
    background-color: transparent;
    box-shadow: none;
  }
`;

export const StyledButton = styled(Button)`
  width: 172px;
  height: 47px;
  border: 2px solid var(--text-title);
  border-radius: 0px;
  color: var(--text-title);
  &:hover{
    background: var(--blue)
  },
  @media (max-width: 700px) {
    display: none;
  }
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  height:120px;
`;

export const Link = styled.p `
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 162.52%;
text-align: center;
margin-left:30px;
@media (max-width: 700px) {
    dfont-weight: 600;
    font-size: 18px;
    margin-bottom:16px;
  }
&:hover{
    cursor:pointer;
    color: var(--blue);
}
`

export const StyledIconButton = styled(IconButton)`
  && {
    display: none;
    @media (max-width: 600px) {
      display: block;
    }
  }
`;

export const StyledNavLinks = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const StyledNavMobile = styled.div `
  display: none;
  @media (max-width: 600px) {
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  margin-top:40px;
  }
`;

export const Img = styled.img `
 width:30px;
 margin-right:7px;
`;

export const Logo = styled.div `
 display:flex;
 justify-content:center;
 align-items:center;
 font-size: 24px;
 font-weight: 400;
 margin-left:8px;
 &:hover{
    cursor:pointer;
 }
 @media (max-width: 600px) {
  display: none;
  }
`;

export const LogoMobile = styled.div `
    display:none;
 &:hover{
    cursor:pointer;
 }
 @media (max-width: 600px) {
display:flex;
 justify-content:center;
 align-items:center;
 font-size: 24px;
 font-weight: 400;
 margin-left:8px;
  }
`;

export const MobileNavbarContainer = styled.div`
position: fixed;
top: 0;
left: 0;
height:100vh;
width: 240px;
background-color: var(--background);
color: white;
`

export const MobileNavbarHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 8px;
background-color: var(--background);
color: var(--background);
font-size: 1.2rem;
font-weight: bold;
button{
color: white;
background-color: var(--background);
border: none;
font-size: 1.5rem;
cursor: pointer;
@media (min-width: 600px) {
.mobile-navbar-container {
  display: none;
}
}
`