import CardElement from './components/CardElement/CardElement';
import CARDS_INFO from './components/constants/cardsInfo';
import Container from './components/Container/Container';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<Container>
			<GlobalStyles />
			{CARDS_INFO.map(card => (
				<CardElement key={card.id} {...card} />
			))}
		</Container>
	);
};

export default App;
