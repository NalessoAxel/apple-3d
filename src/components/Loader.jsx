import React, { useState, useEffect } from 'react';
import AnimatedLogo from '../assets/images/logo-animated.gif';

const Loader = () => {
	return (
		<div className="loader">
			<img className="logo" src={AnimatedLogo} alt="Loading..." />
		</div>
	);
};

export default Loader;
