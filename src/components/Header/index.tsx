import logoSvg from '../../assets/icons/logo.svg'
import {
    Container,
    Content,
    ImageLogo
} from './style'


export function Header() {
    return (
        <Container>
            <Content>
                <ImageLogo src={logoSvg} alt="stackX"/>
                <button>
                    <img src="https://github.com/Gafariias.png" alt="foto de perfil" />
                </button>
            </Content>
        </Container>
    )
}