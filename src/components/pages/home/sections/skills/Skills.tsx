import { FC, useState } from 'react';
import styles from './Skills.module.css';

import { Modal } from '../../../../ui/modal';
import { skills } from './data';
import { MaterialIcon } from '../../../../ui/icons/MaterialIcon';

export const Skills: FC = () => {
	const [open, setOpen] = useState<boolean>(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<section className={styles.skills}>
			<button onClick={handleOpen} className={styles.btn}>
				мои навыки
			</button>

			<Modal opened={open} onClose={handleClose}>
				<div className={styles.wrap}>
					<ul className={styles.skillsList}>
						{skills.map(item => (
							<li key={item.title}>
								<span>{item.title}</span>
								<div className={styles.img}>
									<img src={item.image} alt={item.title} />
								</div>
								<p>{item.descr}</p>
							</li>
						))}
					</ul>
					<button onClick={handleClose}>
						<MaterialIcon muiName='MdClose' />
					</button>
				</div>
			</Modal>
		</section>
	);
};
