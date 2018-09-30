import React from 'react';
import { Animated } from 'react-web-animation';

class Intro extends React.Component {

    getKeyFrames() {
        return [
            { transform: 'scale(0)',    opacity: 0 },
            { transform: 'scale(1)',   opacity: 1 }
        ];
    }

    getTiming( duration ) {
        return {
            duration,
            easing: 'ease-in',
            delay: 0,
            iterations: 1,
            direction: 'alternate',
            fill: 'forwards'
        };
    }

    render() {
        return (
            <Animated.div keyframes={this.getKeyFrames()}
                timing={this.getTiming(500)}>
                <h1 className="intro"><span>Do You Remember<br/>the 90's?</span></h1>
            </Animated.div>
        );
    }
}

export default Intro;