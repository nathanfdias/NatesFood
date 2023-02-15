import { Navbar } from '../../components/Navbar/Navbar';
import { HomeContainer, HomeBackground, HomeDescript, LogoContainer, DescriptText, Logo, ButtonAccess} from './style';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'

export function Home() {
    const navigate = useNavigate();
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
                    <ButtonAccess onClick={() => navigate('/products')}>
                        Acessar Menu!
                    </ButtonAccess>
                </HomeDescript>
            </HomeBackground>
        </HomeContainer>
    )
}