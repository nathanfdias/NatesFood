import { Eye } from "phosphor-react";
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
  Subtitle,
} from "./style";

export function Register() {
  return (
    <LoginContainer>
      <LoginContent>
        <LeftContent>
          <h1>Cadastro</h1>
          <Subtitle>
            Crie sua conta para fazer parte dessa história
          </Subtitle>
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
            <LabelContent>Confirm Password:</LabelContent>
            <InputPasswordContent>
              <InputTextPassword
                type="password"
                placeholder="Confirme sua senha"
              />
              <InputPasswordVisibility>
                <Eye />
              </InputPasswordVisibility>
            </InputPasswordContent>
          </InputContainer>
          <ButtonLogin>Cadastrar</ButtonLogin>
        </LeftContent>
        <RightContent>
          <RightContentImg src={LoginImg} />
        </RightContent>
      </LoginContent>
    </LoginContainer>
  );
}
