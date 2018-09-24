import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    return (
        <button
            className="btn btn-lg btn-primary btn-block"
        >
        {props.text}
        </button>
    );
}

Button.defaultProps = {
    text: "Start"
}

Button.propTypes = {
    name: PropTypes.string
}

export default Button;