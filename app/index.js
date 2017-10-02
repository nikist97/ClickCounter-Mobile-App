import React, {Component} from 'react';
import {Alert, View} from 'react-native';

import Home from './components/Home/index.js'
import InputTimerComponent from './components/InputTimerComponent/index.js'
import TimingComponent from './components/TimingComponent/index.js'
import ClickComponent from "./components/ClickComponent/index.js";

export default class ClickCounter extends Component {

    state = {
        'currentSeconds': -1,
        'time': -1,
        'timerStarted': false,
        'numberOfClicks': 0
    };

    onChanged = (time) => {
        this.setState({'time': time});
    };

    countClick = () => {
        let currentClicks = this.state.numberOfClicks;
        currentClicks += 1;
        this.setState({'numberOfClicks': currentClicks});
    };

    decrementSeconds = () => {
        let updatedSeconds = this.state.currentSeconds;
        updatedSeconds -= 1;
        this.setState({'currentSeconds': updatedSeconds});
        if (updatedSeconds >= 0) {
            setTimeout(this.decrementSeconds, 1000);
        }
        else {
            this.setState({'timerStarted': false});
        }
    };

    startTimer = () => {
        let number = Number(this.state.time);
        if (isNaN(number) || number <= 0){
            Alert.alert("Please enter a valid integer greater than 0 !");
            return;
        }

        this.setState({'currentSeconds': Math.round(number), 'timerStarted': true, 'numberOfClicks': 0});

        setTimeout(this.decrementSeconds, 1000);
    };

    render() {
        return (
            <View>
                <Home/>
                <InputTimerComponent onChanged={this.onChanged} startTimer={this.startTimer} timerStarted={this.state.timerStarted} />
                <TimingComponent currentSeconds={this.state.currentSeconds} />
                <ClickComponent timerStarted={this.state.timerStarted} countClick={this.countClick} numberOfClicks={this.state.numberOfClicks} />
            </View>
        );
    }
}