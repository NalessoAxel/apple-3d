import React from 'react';
import TitleTextDesc from './Utils/TitleTextDesc';

const SoundSection = () => {
	const handleLearnMore = () => {
		const el = document.querySelector('.display-section');
		window.scrollTo({
			top: el?.getBoundingClientRect().bottom,
			left: 0,
			behavior: 'smooth',
		});
	};
	return (
		<div className="sound-section wrapper">
			<div className="body">
				<div className="sound-section-content content">
					<TitleTextDesc
						title="New Sound System"
						text="Feel The base"
						description="From $41.62/mo. for 24 mo. or $999 before trade-in "
					/>

					<ul className="links">
						<li>
							<button className="button">Buy</button>
						</li>
						<li>
							<a className="link" onClick={handleLearnMore}>
								Learn More
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SoundSection;
