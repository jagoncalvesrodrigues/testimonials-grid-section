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

const CardElement = ({
	image,
	name,
	job,
	phrase,
	text,
	color,
	textColor,
	gcolum,
	grow
}) => {
	return (
		<StyledCardElement $color={color} $gcolum={gcolum} $grow={grow}>
			<StyledProfile>
				<StyledImage src={image} alt='' />
				<StyledProfileInfo>
					<StyledName $textColor={textColor}>{name}</StyledName>
					<StyledJob $textColor={textColor}>{job}</StyledJob>
				</StyledProfileInfo>
			</StyledProfile>
			<StyledPhraseCard $textColor={textColor}>{phrase}</StyledPhraseCard>
			<StyledTextCard $textColor={textColor}>{text}</StyledTextCard>
		</StyledCardElement>
	);
};

export default CardElement;
