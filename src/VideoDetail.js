import React from 'react';
import data from './data';

export default class VideoDetail extends React.Component {
    state = {
        video: data[0],
        like: 0,
        dislike: 0,
        index: 0
    };

    constructor(props) {
        super(props);
    
        // This binding is necessary to make `this` work in the callback
        this.upLike = this.upLike.bind(this);
        this.upDislike = this.upDislike.bind(this);
      }
    
    upLike() {
        this.setState({like: this.state.like + 1});
    }
    upDislike() {
        this.setState({dislike: this.state.dislike + 1});
    }

    /** Experimental */
    // upLike = () => {
    //     this.setState({like: this.state.like++})
    // }
    // upDislike = () => {
    //     this.setState({dislike: this.state.dislike++})
    // }
    
    componentDidMount() {
        // setInterval(() => {
        //     this.changeVideo();
        // }, 2000);
    }

	render() {
        const style = {
            width : 100 + '%',
            backgroundColor: 'black'
        }

		return <div className="videoDetail">
        <video
            style={style}
            height="300"
            controls
            src={"./uploads/" + this.state.video.file}
        >
        </video>
        <header>
        <h1>{this.state.video.title}</h1>
        <div className="likesContainer">
            <button className="like" onClick={() => this.upLike()}> {this.state.like} </button>
            <button className="dislike" onClick={() => this.upDislike()}> {this.state.dislike} </button>
	    </div>
        </header>
        {this.state.video.description ? <p>{this.state.video.description}</p> : ''}
    </div>
    ;
	}

    changeVideo() {
        this.state.index < data.length-1 ? this.state.index++ : this.setState({index: 0});
        console.log(this.state.index);
        this.setState({video: data[this.state.index]})
    }
}
