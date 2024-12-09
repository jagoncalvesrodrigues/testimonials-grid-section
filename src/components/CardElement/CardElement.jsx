import {
	StyledCardElement,
	StyledImage,
	StyledJob,
	StyledName,
	StyledPhraseCard,
	StyledProfile,
	StyledProfileInfo,
	StyledTextCard
} from './cardElement.styles';

const CardElement = ({ image, name, job, phrase, text, color }) => {
	return (
		<StyledCardElement $color={color}>
			<StyledProfile>
				<StyledImage src={image} alt='' />
				<StyledProfileInfo>
					<StyledName>{name}</StyledName>
					<StyledJob>{job}</StyledJob>
				</StyledProfileInfo>
			</StyledProfile>
			<StyledPhraseCard>{phrase}</StyledPhraseCard>
			<StyledTextCard>{text}</StyledTextCard>
		</StyledCardElement>
	);
};

export default CardElement;
