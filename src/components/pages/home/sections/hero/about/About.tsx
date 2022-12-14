import { FC } from 'react';
import styles from './About.module.css';

export const About: FC = () => {
	return (
		<ul className={styles.list}>
			<li>Меня зовут Федотов Максим, мне 18 лет</li>
			<li>
				Учусь на 3-ем курсе по специальности{' '}
				<span>{'"Информационные системы и программирование"'}</span>
			</li>
			<li>
				Увлекаюсь веб-разработкой, люблю разрабатывать как frontend, так и
				backend
			</li>
			<li>
				Владению навыки работы с реляционными и документными базами данных
			</li>
		</ul>
	);
};
