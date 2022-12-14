import { FC } from 'react';
import { Home } from '../pages/home/Home';
import { Header } from './header/Header';

export const Layout: FC = () => {
	return (
		<>
			<Header />
			<main>
				<Home />
			</main>
		</>
	);
};
