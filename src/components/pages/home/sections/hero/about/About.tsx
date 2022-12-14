import { FC } from 'react';
import styles from './About.module.css';

export const About: FC = () => {
	return (
		<>
			<ul className={styles.list}>
				<li>Меня зовут Федотов Максим, мне 18 лет</li>
				<li>
					Учусь на 3-ем курсе по специальности{' '}
					<span>{'"Информационные системы и программирование"'}</span>
				</li>
				<li>
					Увлекаюсь веб-разработкой, люблю разрабатывать как{' '}
					<span>frontend</span>, так и<span>backend</span>
				</li>
				<li>
					Владению навыки работы с <span>реляционными</span> и{' '}
					<span>документными</span> базами данных
				</li>
				<li>
					Сейчас веду разработку большого <span>fullstack</span> проекта -
					интернет магазин, первый мой большой проект, который разрабатываю{' '}
					<span>сам, с нуля!</span>
				</li>
				<li>
					Любимый стек: <span>Next.js + Nest.js + PostreSQL</span>
				</li>
			</ul>

			<h2>{'"Hard Skills"'}</h2>

			<ul className={styles.list}>
				<li>
					Занимаюсь программированием полтора года, в достоинстве владею
					языками:
					<span>Typescript, Javascript</span>
				</li>
				<li>
					Есть опыт написания кода на C# <span>.NET MVC</span>
				</li>
				<li>
					Был небольшой опыт работы с <span>PHP и WordPress</span>
				</li>
				<li>
					Хорошо понимаю работу <span>алгоритмов</span>, умею находить
					оптимальные решения
				</li>
				<li>
					Умею писать <span>сложные</span> SQL-запросы и{' '}
					<span>проектировать</span> базы данных
				</li>
			</ul>
		</>
	);
};
