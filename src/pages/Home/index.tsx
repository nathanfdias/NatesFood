import { Navbar } from '../../components/Navbar/Navbar';
import { HomeContainer, HomeBackground, HomeDescript, LogoContainer, DescriptText, Logo, ButtonAccess} from './style';
import logo from '../../assets/logo.png'

export function Home() {
    return(
        <HomeContainer>
            <Navbar />
            <HomeBackground>
                <HomeDescript>
                    <LogoContainer>
                        <Logo src={logo} />
                    </LogoContainer>
                    <DescriptText>
                        <h1>The Best Foods</h1>
                        <p>Hamburguers, pizzas e doces!</p>
                    </DescriptText>
                    <ButtonAccess>
                        Bem Vindo!
                    </ButtonAccess>
                </HomeDescript>
            </HomeBackground>
        </HomeContainer>
    )
}