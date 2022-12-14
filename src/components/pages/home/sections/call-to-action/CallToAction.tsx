import { FC } from 'react';
import { MaterialIcon } from '../../../../ui/icons/MaterialIcon';
import styles from './CallToAction.module.css';

export const CallToAction: FC = () => {
	return (
		<section className={styles.call}>
			<h2>Обязательно жду от вас обратной связи!</h2>

			<p>
				Для этого есть специальная форма, разработнная на площадке{' '}
				<span>{'"Яндекс Формы"'}</span>, доступ к ней по ссылке ниже или в
				следующей секции сайта, где тебе удобнее!
			</p>

			<a
				href='https://forms.yandex.ru/u/639982fe43f74f00aac9ec35/'
				target='_blank'
				rel='noreferrer'
			>
				<div className={styles.icon}>
					<MaterialIcon muiName='FaYandex' />
				</div>
				<span>Обратная связь</span>
			</a>

			<p>Огромное тебе спасибо за просмотр моего портфолио, всего хорошего!</p>
		</section>
	);
};
