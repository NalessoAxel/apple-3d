import React from 'react';

const TitleTextDesc = ({ title, text, description }) => {
	return (
		<>
			<h2 className="title">{title}</h2>
			<p className="text">{text}.</p>
			<span className="description">{description}</span>
		</>
	);
};

export default TitleTextDesc;
