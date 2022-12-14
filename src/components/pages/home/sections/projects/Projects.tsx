import { FC } from 'react';
import Slider from '../../../../ui/slider/Slider';
import { projects } from './data';
import styles from './Projects.module.css';

export const Projects: FC = () => {
	return (
		<section className={styles.proj}>
			<h2 className={styles.title}>Какие проекты я могу сделать ?</h2>

			<Slider items={projects} />
		</section>
	);
};
