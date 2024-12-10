import styled from "styled-components";

const StyledCardElement = styled.div`
    background-color: ${({$color})=>$color};
    padding: 26px 32px;
    border-radius: 8px;
    margin-bottom: 24px;
    @media screen and (width>1440px) {
        margin-bottom: 0px;
        grid-column: ${({$gcolum})=>$gcolum};
        grid-row: ${({$grow})=>$grow};
    }
`;

const StyledProfile = styled.div`
    display: flex;
    width: 121px;
    height: 28px;
    justify-content: space-between;
`;

const StyledImage = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
`;

const StyledProfileInfo = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: space-between;
`;

const StyledName = styled.p`
    margin: 0;
    font-size: 13px;
    color: rgb(${({ $textColor }) => $textColor});
    font-weight: 500;
    line-height:13px;
`;

const StyledJob = styled.p`
    margin: 0;
    font-size: 11px;
    color: rgba(${({ $textColor }) => $textColor}, 0.5);
    font-weight: 500;
    line-height: 11px;
`;

const StyledPhraseCard = styled.p`
    font-size: 20px;
    line-height:auto;
    letter-spacing: 0;
    font-weight: 600;
    color:rgb(${({ $textColor }) => $textColor});
`;

const StyledTextCard = styled.p`
    font-weight: 500;
    font-size: 13px;
    line-height:18px;
    letter-spacing: 0;
    color: rgba(${({ $textColor }) => $textColor},0.7);
`;

export {StyledCardElement,StyledProfile,StyledImage,StyledProfileInfo,StyledName,StyledJob,StyledPhraseCard,StyledTextCard}