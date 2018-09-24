import React from 'react';

export default function ScoreCount(props) {
    return (
        <div className="col-6 score">
            <p>Score {props.score} / 10</p>
        </div>
    );
}