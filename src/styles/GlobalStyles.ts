// ========== Global Styles
// import all modules
import { createGlobalStyle } from 'styled-components';
import InterRegular from '../assets/fonts/Inter-Regular.ttf';
import InterBold from '../assets/fonts/Inter-Bold.ttf';
import { Colors, Fonts } from '../themes';

export const GlobalStyles = createGlobalStyle`
	@font-face {
		src: url(${InterRegular}) format('truetype');
		font-family: Inter-Regular;
	}

	@font-face {
		src: url(${InterBold}) format('truetype');
		font-family: Inter-Bold;
	}

	html {
		background-color: ${Colors.light};
		font-family: ${Fonts.base};
		font-size: 16px;
	}

	* {
		margin: 0;
		padding: 
	}

	h1 {
		font-size: 2.8rem;
	}

	h2 {
		font-size: 2.6rem;
	}

	h3 {
		font-size: 2.4rem;
	}

	h4 {
		font-size: 2.2rem;
	}

	h5 {
		font-size: 2rem;
	}

	h6 {
		font-size: 1.8rem;
	}

	p {
		font-size: 1rem;
	}
`;
