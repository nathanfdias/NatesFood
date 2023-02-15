import { useState } from "react";
import { useAuth } from "../../utils/useAuth";
import { Eye } from "phosphor-react";
import { NavLink, useNavigate } from "react-router-dom";
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
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const auth = useAuth();
  const navigate = useNavigate();

  const handleClickShowPassword = (e: any) => {
    if (showPassword === false) {
      setShowPassword(true);
    }
    if (showPassword === true) {
      setShowPassword(false);
    }
  };


  async function handleSignin () { 
    try {
       await auth.authenticate(username, password);
       toast.success('Login realizado com sucesso!');
        setTimeout(() => {
          navigate(`/`);
       }, 2000);
    } catch (error) {
        console.log(error)
        toast.error("Espaços vazios ou inválidos")
    }
  }


  return (
    <LoginContainer>
      <LoginContent>
        <LeftContent>
          <h1>Bem vindo!</h1>
          <Subtitle>
            Faça login para acessar nosso site, ou cadastre-se
          </Subtitle>
          <InputContainer>
            <LabelContent>Username:</LabelContent>
            <InputTextUsername
              type="text"
              placeholder="Digite seu username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <LabelContent>Password:</LabelContent>
            <InputPasswordContent>
              <InputTextPassword
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputPasswordVisibility>
                <Eye onClick={(e) => handleClickShowPassword(e)} />
              </InputPasswordVisibility>
            </InputPasswordContent>
          </InputContainer>
          <ButtonLogin onClick={handleSignin}>
            Login
          </ButtonLogin>
          <p>
            Não possui uma conta? <NavLink to="/register">Cadastre-se</NavLink>
          </p>
        </LeftContent>
        <RightContent>
          <RightContentImg src={LoginImg} />
        </RightContent>
      </LoginContent>
      <ToastContainer />
    </LoginContainer>
  );
}
