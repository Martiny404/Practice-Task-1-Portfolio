import { FC } from 'react';
import { CallToAction } from './sections/call-to-action/CallToAction';
import { Hero } from './sections/hero/Hero';
import { Projects } from './sections/projects/Projects';
import { Skills } from './sections/skills/Skills';

export const Home: FC = () => {
	return (
		<>
			<Hero />

			<Skills />

			<Projects />

			<CallToAction />
		</>
	);
};
