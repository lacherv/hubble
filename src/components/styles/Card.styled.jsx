import styled from "styled-components";

export const StyledCard = styled.div`
    align-items: center;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    display: flex;
    margin: 40px;
    padding: 60px;
    flex-direction: ${({ layout }) => layout || 'row'};

    img {
        width: 80%;
    }
    & > div {
        flex: 1;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    }
`;