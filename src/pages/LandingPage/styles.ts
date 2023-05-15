import styled, { keyframes } from "styled-components";
import { Box } from "@material-ui/core";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const HorizontalFlex = styled(Box)`
  display: flex;
  margin-top:80px;
  margin-bottom:60px;
  h1, p{
    margin: 16px;
  }
  @media (max-width: 920px) {
    flex-direction: column;
    margin-top:40px;
  }
`;

export const LandingInfos = styled.div`
    margin:16px;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImgLanding = styled.img`
  width: 50vw;
  @media (max-width: 920px) {
    width:90vw;
    margin-top:30px;
  }
`;

export const InputCep = styled(Box)`
  display: flex;
  justify-content: space-between;
  background: none;
  width: 449px;
  height: 60px;
  border: 1px solid var(--gray);
  border-radius: 35px;

  @media (max-width: 720px) {
    width: 100%;
    max-width: 400px;
  }
`;

export const Input = styled.input`
  display: flex;
  justify-content: space-between;
  background: none;
  width: 349px;
  height: 60px;
  border: none;
  border-radius: 35px;
  margin: 0px;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid var(--text-body);
  border-top-color: transparent;
  animation: ${spin} 0.8s linear infinite;
  margin: auto;
  margin-top:120px;
`;
