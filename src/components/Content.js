import React from 'react';
import { selectItem } from '../components/Helpers';

const Content = (props) => {
    if (!props.intro) {
        return (
            <React.Fragment>
                <h4 className="qcount-heading">Question {props.count}</h4>
                <h1 className="content">{props.question}</h1>
                <ul className="choices" onClick={(e) => selectItem(e)}>
                    {props.choices.map((choice, i) => {
                        return <li id={i} key={i}>{choice}</li>
                    })}
                </ul>
                <button onClick={props.check} className="btn btn-lg btn-primary btn-block" id="js-check">
                Select Answer
                </button>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <h1 className="intro">Do You<br /><span>Remember</span><br/>the<span> 90's?</span></h1>
                <button onClick={props.trigger} className="btn btn-lg btn-primary btn-block">Let's Dance</button>
            </React.Fragment>
        );
    }
}

export default Content;