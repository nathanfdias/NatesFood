import { Eye } from "phosphor-react";
import { Link, NavLink } from "react-router-dom";
import LoginImg from "../../assets/LoginImg.jpg";
import {
  ButtonLogin,
  InputContainer,
  InputPasswordContent,
  InputPasswordVisibility,
  InputTextPassword,
  InputTextUsername,
  LabelContent,
  LeftContent,
  LoginContainer,
  LoginContent,
  RightContent,
  RightContentImg,
  Subtitle
} from "./style";

export function Login() {
  return (
    <LoginContainer>
      <LoginContent>
        <LeftContent>
          <h1>Bem vindo!</h1>
          <Subtitle>Faça login para acessar nosso site, ou cadastre-se</Subtitle>
          <InputContainer>
            <LabelContent>Username:</LabelContent>
            <InputTextUsername type="text" placeholder="Digite seu username" />
            <LabelContent>Password:</LabelContent>
            <InputPasswordContent>
              <InputTextPassword
                type="password"
                placeholder="Digite sua senha"
              />
              <InputPasswordVisibility>
                <Eye />
              </InputPasswordVisibility>
            </InputPasswordContent>
          </InputContainer>
          <ButtonLogin>Login</ButtonLogin>
          <p>
            Não possui uma conta? <NavLink to="/">Cadastre-se</NavLink>
          </p>
        </LeftContent>
        <RightContent>
          <RightContentImg src={LoginImg} />
        </RightContent>
      </LoginContent>
    </LoginContainer>
  );
}
