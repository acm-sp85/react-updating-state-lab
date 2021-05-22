// Code DigitalClicker Component Here
import React, {Component} from 'react';

export default class DigitalClicker extends Component {

    state = {
        timesClicked: 0
    }

    updateClicker = () =>{
        this.setState(previousState => {

            return {
                timesClicked: previousState.timesClicked+1
            }
        })
    }
    
    render() {

        return (
            <div>
                <button onClick={this.updateClicker}>{this.state.timesClicked}</button>
            </div>
        )
    }
}