import { FC } from 'react';
import { FaGithub, FaTelegramPlane, FaYandex } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdChevronLeft, MdChevronRight, MdClose } from 'react-icons/md';

const icons = {
	TelegramIcon: FaTelegramPlane,
	GitHubIcon: FaGithub,
	MenuIcon: GiHamburgerMenu,
	MdClose: MdClose,
	MdChevronLeft: MdChevronLeft,
	MdChevronRight: MdChevronRight,
	FaYandex: FaYandex,
};

export type MaterialIconType = keyof typeof icons;

export const MaterialIcon: FC<{ muiName: MaterialIconType }> = ({
	muiName,
}) => {
	const IconComponent = icons[muiName];

	return <IconComponent />;
};
