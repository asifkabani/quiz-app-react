import React from 'react';

const selectItem = (e) => {

    if (e.target === e.currentTarget) {
        return false;
    } else {
        
        console.log(e.target)

        let getChildren = e.currentTarget.childNodes;

        console.log(getChildren)

        for (let i = 0; i < getChildren.length; i++) {
            let child = getChildren[i];
            if (e.target === child) {
                e.target.className = 'selected';
            } else {
                child.className = '';
            }
        }
    }
}

function Content(props) {
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
                        return <li key={i}>{choice}</li>
                    })}
                </ul>
                <button onClick={props.check} className="btn btn-lg btn-primary btn-block">Check Answer</button>
            </React.Fragment>
        );
    }
}

export default Content;