import { FC } from 'react';
import styles from './Hero.module.css';
import hero from '../../../../../images/hero.jpeg';
import me from '../../../../../images/me.jpeg';
import { About } from './about/About';

export const Hero: FC = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.left}>
				<h1>
					<span>Приветствую тебя, дорогой друг!</span>

					<span> Это мой сайт-резюме!</span>
				</h1>

				<h2>Немного обо мне:</h2>

				<About />
			</div>
			<div className={styles.right}>
				<img src={hero} alt='programmer' />
				<img className={styles.me} src={me} alt='me' />
			</div>
		</section>
	);
};
