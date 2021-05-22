// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {

    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }

      changeBitrate = (event) => {

        this.setState({ settings: {...this.state.settings, bitrate: 12}})
    }

      changeResolution = (event) => {
      this.setState(prevState => ({
        ...prevState, settings: {
            ...prevState.settings, video: {
                ...prevState.settings.video, resolution: '720p'
            }
        }
        }))
    }

    render() {

        return (
            <div>
                <button className="bitrate" onClick={this.changeBitrate}>BITRATE{this.state.settings.bitrate}</button>
                <button className="resolution" onClick={this.changeResolution}>RESOLUTION {this.state.settings.video.resolution}</button>
            </div>
        )
    }
}