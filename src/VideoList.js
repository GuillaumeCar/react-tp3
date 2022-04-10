import React from 'react';
import data from './data';

export default class VideoList extends React.Component {
    state = {
        videos: [],
        isLoading: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({videos: data, isLoading: false});
        }, 3000);
    }

	render() {
        let videoList = [];
        this.state.videos.forEach(data => {
            videoList.push(
            <a key={data.id} href={"uploads/" + data.file}>
                <img src={"https://source.unsplash.com/" + data.thumbnail + "/600x340"} />
                <section className="infos">
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                </section>
            </a>)
            }
        );

		return 	<div className="container">
		<header>
			<h1>Recommandations</h1>
		</header>
		<div className={"videoList " + (this.state.isLoading ? 'is-loading' : '')}>{videoList}</div>
	    </div>
        ;
	}
}
