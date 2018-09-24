import React from 'react';
import { selectItem } from '../components/Helpers';

const Content = (props) => {
    if (props.intro) {
        return (
            <React.Fragment>
                <h1 className="intro">Do <span>You</span><br />Remember<br/><span>the 90's?</span></h1>
                <button onClick={props.trigger} className="btn btn-lg btn-primary btn-block">Let's Dance</button>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <h4 className="qcount-heading">Question 1</h4>
                <h1>{props.question}</h1>
                <ul className="choices" onClick={(e) => selectItem(e)}>
                    {props.choices.map((choice, i) => {
                        return <li id={i} key={i}>{choice}</li>
                    })}
                </ul>
                <button onClick={props.check} className="btn btn-lg btn-primary btn-block">Check Answer</button>
            </React.Fragment>
        );
    }
}

export default Content;