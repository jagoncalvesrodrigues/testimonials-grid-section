import styled from "styled-components";

const StyledCardElement = styled.div`
    background-color: ${({$color})=>$color};
    padding: 26px 32px;
`;

const StyledProfile = styled.div`
    width: 128px;
    height: 28px;
`;

const StyledImage = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
`;

const StyledProfileInfo = styled.div`
    
`;

const StyledName = styled.p`
    margin-top: 0;
`;

const StyledJob = styled.p`
    margin-top: 0;
`;

const StyledPhraseCard = styled.p`
`;

const StyledTextCard = styled.p`
`;

export {StyledCardElement,StyledProfile,StyledImage,StyledProfileInfo,StyledName,StyledJob,StyledPhraseCard,StyledTextCard}