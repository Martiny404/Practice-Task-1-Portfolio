import { IProject } from '../../../../../types';

import shop from '../../../../../images/shop.jpeg';
import admin from '../../../../../images/admin-panel.png';
import social from '../../../../../images/social.jpg';
import kino from '../../../../../images/online-kino.jpeg';

export const projects: IProject[] = [
	{
		title: 'Интернет магазины',
		image: shop,
	},
	{
		title: 'Внедрение админ-панелей в новые или готовые проекты',
		image: admin,
	},
	{
		title: 'Социальные сети',
		image: social,
	},
	{
		title: 'Онлайн кинотеатры',
		image: kino,
	},
];
