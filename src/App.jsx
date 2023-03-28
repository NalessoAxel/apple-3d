import { useRef, useState, useEffect } from 'react';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import SoundSection from './components/SoundSection';
import DisplaySection from './components/DisplaySection';
import WebgiViewer from './components/WebgiViewer';
import Loader from './components/Loader';

function App() {
	const webgiViewerRef = useRef(null);
	const contentRef = useRef(null);

	const handlePreview = () => {
		webgiViewerRef.current.triggerPreview();
	};

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		window.addEventListener('load', () => {
			setIsLoading(false);
		});
	}, []);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className="App">
			<div id="content" ref={contentRef}>
				<Nav />
				<Jumbotron />
				<SoundSection />
				<DisplaySection triggerPreview={handlePreview} />
			</div>

			<WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
		</div>
	);
}

export default App;
