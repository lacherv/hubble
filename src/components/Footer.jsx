import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <img src="./images/logo_white.svg" alt="" />

                <Flex>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, illo?
                        </li>
                        <li>+27 00 1101 000</li>
                        <li>exmple@huble.com</li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                    {/* Social Icons */}
                </Flex>
                <p>&copy; 2022 Hubble. All rights reserved</p>
            </Container>
        </StyledFooter>
    );
}

export default Footer;