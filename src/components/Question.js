import React from 'react';

const toggleClass = (e, props) => {
    const listItems = document.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        let child = listItems[i];
        if (e.target === child) {
            e.target.className = 'selected';
        } else {
            child.className = '';
        }
    }
}

const selectItem = (e, props) => toggleClass(e, props);

const createList = (props) => {
    return(
        <ul className="choices">
            {props.choices.map((choice, i) => {
                return (
                    <li
                        onClick={(e) => selectItem(e)}
                        onMouseUp={(e) => props.selected(e)}
                        id={i}
                        key={i}
                    >{choice}
                    </li>
                );
            })}
        </ul>
    );
}

const Question = (props) => {
    return (
        <React.Fragment>
            <h4 className="qcount-heading">Question {props.count}</h4>
            <h1 className="content">{props.question}</h1>
            {createList(props)}
        </React.Fragment>
    );
}

export default Question;