import styled from "styled-components";

const StyledContainer = styled.div`
    padding: 71px 24px 72px 24px;
    background-color: #ECF2F8;

    @media screen and (width>1440px) {
        padding: 164px 165px;
        gap: 24px;
        display: grid;
        grid-template-columns: repeat(4,1fr);

        &:nth-child(1){
            grid-column: 1/3;
            grid-row: 1/2;
        }
    }
`;

export {StyledContainer}