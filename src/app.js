import {render} from 'react-dom';
import React from 'react';
import VideoDetail from './VideoDetail';
import Menu from './Menu';
import VideoList from './VideoList';

render(
	<>
		<Menu />
		{/* <VideoList /> */}
        
		<VideoDetail />
	</>,
	document.querySelector('.appContainer')
);

