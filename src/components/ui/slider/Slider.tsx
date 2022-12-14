import React, { FC, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { IProject } from '../../../types';
import { MaterialIcon } from '../icons/MaterialIcon';

const Slider: FC<{ items: IProject[] }> = ({ items }) => {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState('slide-right');

	const slideLeft = () => {
		const nextIndex = index - 1;
		if (nextIndex < 0) {
			setIndex(items.length - 1);
		} else {
			setIndex(nextIndex);
		}
		setDirection('slide-left');
	};

	const slideRight = () => {
		setIndex((index + 1) % items.length);
		setDirection('slide-right');
	};

	const childFactory = (direction: string) => (child: any) =>
		React.cloneElement(child, {
			classNames: direction,
		});

	return (
		<div className='slider-wrapper'>
			<div className='image-slider'>
				<button className='arrow-btn' onClick={slideLeft}>
					<MaterialIcon muiName='MdChevronLeft' />
				</button>
				<div className='image-wrapper'>
					<TransitionGroup childFactory={childFactory(direction)}>
						<CSSTransition
							key={items[index].title}
							timeout={400}
							classNames={direction}
						>
							<div className='slider-item'>
								<span>{items[index].title}</span>

								<img alt={items[index].title} src={items[index].image} />
							</div>
						</CSSTransition>
					</TransitionGroup>
				</div>
				<button className='arrow-btn' onClick={slideRight}>
					<MaterialIcon muiName='MdChevronRight' />
				</button>
			</div>
		</div>
	);
};
export default Slider;
