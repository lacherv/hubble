import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #ebfbff;
    padding: 40px 0;

    // Nesting
    h1 {
        color: red;
    }

    &:hover {
        background-color: black;
    }
`;