import React from 'react';

function QuestionCountHeading(props) {
    return (
        <h4 className="qcount-heading">Question {props.count}</h4>
    );
}

export default QuestionCountHeading;