import styled from "styled-components";
import background from "../../assets/BackgroundLogin.jpg";

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100%;
  /* background-image: url(${background}); */
  background-color: #0004;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Subtitle = styled.p`
    font-size: 1.2rem;
`;

export const LoginContent = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: row;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  font-size: 1.2rem;
`;

export const LeftContent = styled.div`
  height: 100%;
  width: 40%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 6rem;
`;

export const RightContent = styled.div`
  height: 100%;
  width: 60%;
`;

export const RightContentImg = styled.img`
  height: 100%;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

export const InputTextUsername = styled.input`
  width: 60%;
  padding-block: 1rem;
  padding-left: 1rem;
  border: none;
  background-color: #0101;
  font-size: 0.9rem;
  &:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;

export const InputPasswordContent = styled.div`
  display: flex;
  width: 100%;
`;

export const InputTextPassword = styled.input`
  width: 50%;
  padding-block: 1rem;
  padding-left: 1rem;
  border: none;
  background-color: #0101;
  font-size: 0.9rem;
  &:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;

export const InputPasswordVisibility = styled.div`
  width: 10%;
  background-color: #0101;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  cursor: pointer;
  color: #0008;
`;

export const ButtonLogin = styled.button`
  width: 30%;
  background-color: #000920;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  padding: 1rem;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
`;

export const LabelContent = styled.label`
    color: #000900;
`
