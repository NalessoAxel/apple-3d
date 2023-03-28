import React from 'react';
import TitleTextDesc from './Utils/TitleTextDesc';

const DisplaySection = ({ triggerPreview }) => {
	const handleTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className="display-section wrapper">
			<TitleTextDesc
				title="New"
				text="Brilliant"
				description="A display that's up to 2x brighter in the sun."
			/>

			<button className="button" onClick={triggerPreview}>
				Try me!
			</button>

			<button className="back-button" onClick={handleTop}>
				TOP
			</button>
		</div>
	);
};

export default DisplaySection;
