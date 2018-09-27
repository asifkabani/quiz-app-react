import React from 'react';

const Button = (props) => {
    if (props.type === 'intro') {
        return <button onClick={props.start} className="btn btn-lg btn-primary btn-block">Let's Dance</button>;
    } else if (props.type === 'question') {
        return <button onClick={props.check} className="btn btn-lg btn-primary btn-block">Select Answer</button>;
    } else if (props.selected === true) {
        return <button className="btn btn-lg btn-primary btn-block">Check Answer</button>;
    }
}

export default Button;