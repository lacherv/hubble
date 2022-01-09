import { Container } from "./styles/Container.styled";
import { StyledHeader, Nav, Logo } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' alt='' />
                    <Button>Try it Free</Button>
                </Nav>

                <Flex>
                    <div>
                        <h1>Build The Comminuty Your Fans Will Love</h1>
                        <p>
                            Huddle re-imagines the way we build communities. You have a voice, but 
                            so does your audience. Create connections with your users as ypou engage in genuine
                            discussion.
                        </p>
                    </div>
                </Flex>
            </Container>
        </StyledHeader>
    );
}

export default Header;