import React from 'react';

const selectItem = (e) => {
    if (e.target === e.currentTarget) {
        return false;
    } else {
        let button = document.getElementsByTagName('button')[0];
        let getChildren = e.currentTarget.childNodes;
        for (let i = 0; i < getChildren.length; i++) {
            let child = getChildren[i];
            if (e.target === child) {
                e.target.className = 'selected';
            } else {
                child.className = '';
            }
        }
        button.innerHTML = 'check answer';
        button.addEventListener('click', this.checkAnswer);
    }
}

const Question = (props) => {
    return (
        <React.Fragment>
            <h4 className="qcount-heading">Question {props.count}</h4>
            <h1 className="content">{props.question}</h1>
            <ul className="choices" onClick={(e) => selectItem(e)}>
                {props.choices.map((choice, i) => {
                    return <li id={i} key={i}>{choice}</li>
                })}
            </ul>
        </React.Fragment>
    );
}

export default Question;