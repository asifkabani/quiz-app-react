import React from 'react';

export default function QuestionCount(props) {
    return (
        <div className="col-6 qcount">
            <p>Question {props.question} / 10</p>
        </div>
    );
}