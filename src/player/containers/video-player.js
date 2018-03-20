import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer.js';
import Controls from '../components/video-player-controls.js';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false, //Estado inicial del spinner
  }
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }
  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }
  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration //tiempo total del video
    });
  }
  handleTimeUpdate = event => {
    // console.log(this.video.currentTime)
    this.setState({
      currentTime: this.video.currentTime //tiempo transcurrido del video
    })
  }
  handleProgressChange = event => {  //cambiar el value , es decir el tiempo en el que transcurre el video
    // event.target.value
    this.video.currentTime = event.target.value  //se le setea un nuevo tiempo al elemento video
  }
  handleSeeking = event => {
    this.setState({
      loading: true  //Que ponga el cargando
    })
  }
  handleSeeked = event => {
    this.setState({
      loading: false //Que quite el cargando
    })
  }
  render() {
    return (
      <VideoPlayerLayout>
        <Title
          title="Esto es un video chido!"
        />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
          <ProgressBar
            duration={this.state.duration}  //duracion del video, se le pasa al progress-bar como la duracion maxima 
            value={this.state.currentTime}  //se le pasa el valor por defecto a la progress-bar , en tiempo real del video ,aqui ya se maneja el valor del elemento
            handleProgressChange={this.handleProgressChange}  //cambiando el tiempo transcurrido del video, ir hacia adelate o atrasar el elemento video
          />
        </Controls>
        <Spinner
          active={this.state.loading}  //Que reaccione al estado, si esta activo se pone y si no se quita
        />
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;