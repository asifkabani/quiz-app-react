import React from 'react';

const Button = (props) => {
    if (props.type === 'intro') {
        return (
            <button
                className="btn btn-lg btn-primary btn-block"
                onClick={props.start}
            >Let's Dance
            </button>
        );
    } else if (props.type === 'question') {
        return (
            <button
                className="btn btn-lg btn-primary btn-block"
                disabled
            >Select Answer
            </button>
        );
    } else if (props.type === 'selected') {
        return (
            <button
                className="btn btn-lg btn-primary btn-block"
                onClick={props.check}
            >Check Answer
            </button>
        );
    } else if (props.type === 'next') {
        return (
            <button
                className="btn btn-lg btn-primary btn-block"
                onClick={props.next}
            >Next Question
            </button>
        );
    } else if (props.type === 'finished') {
        return (
            <button
                className="btn btn-lg btn-primary btn-block"
                onClick={props.start}
            >Retry Quiz?
            </button>
        );
    } else if (props.type === 'hide') {
        return <div></div>;
    }
}

export default Button;