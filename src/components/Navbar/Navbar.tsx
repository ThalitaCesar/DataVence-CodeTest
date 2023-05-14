import React, { useState } from 'react';
import { Img, Link, Logo, LogoMobile, MobileNavbarContainer, MobileNavbarHeader, StyledAppBar, StyledButton, StyledIconButton, StyledNavLinks, StyledNavMobile, StyledToolbar } from './styles';
import { TiThMenu } from 'react-icons/ti';
import logo from '../../assets/logo.svg';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuOpen = () => {
    setOpen(true);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <StyledAppBar position="static">
        <StyledToolbar>
          <Logo onClick={()=> {navigate('/')}}>
            <Img src={logo} />
            Leiturama
          </Logo>
          <StyledIconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
            <LogoMobile onClick={()=> {navigate('/')}}>
            <Img src={logo} />
            Leiturama
          </LogoMobile>
            <TiThMenu />
          </StyledIconButton>
          <StyledNavLinks>
            <Link>Planos</Link>
            <Link>Benefícios</Link>
            <Link>Como Funciona</Link>
          </StyledNavLinks>
          <StyledButton variant="outlined">Login</StyledButton>
        </StyledToolbar>
      </StyledAppBar>

      {open && <MobileNavbar onClose={handleMenuClose} />}
    </div>
  );
};

const MobileNavbar = ({ onClose }: { onClose: () => void }) => {
    const navigate = useNavigate();
  return (
    <MobileNavbarContainer>
      <MobileNavbarHeader>
        <h2></h2>
        <Button onClick={onClose} color="primary">
          X
        </Button>
      </MobileNavbarHeader>
      <StyledNavMobile>
        <Link onClick={()=> {navigate('/')}}>Início</Link>
        <Link>Planos</Link>
        <Link>Benefícios</Link>
        <Link>Como Funciona</Link>
      </StyledNavMobile>
    </MobileNavbarContainer>
  );
};

export default Navbar;
