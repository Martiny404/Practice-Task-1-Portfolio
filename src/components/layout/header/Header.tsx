import { FC } from 'react';
import { MaterialIcon } from '../../ui/icons/MaterialIcon';
import styles from './Header.module.css';

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<a href='/'>Федотов Максим</a>
			</div>
			<nav className={styles.nav}>
				<ul>
					<li>
						<a
							href='https://github.com/Martiny404'
							target='_blank'
							rel='noreferrer'
						>
							<MaterialIcon muiName='GitHubIcon' />
						</a>
					</li>
					<li>
						<a
							href='https://t.me/maximfed0t0v'
							target='_blank'
							rel='noreferrer'
						>
							<MaterialIcon muiName='TelegramIcon' />
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};
