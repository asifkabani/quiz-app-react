import React from 'react';

const Finished = (props) => {
    return (
        <React.Fragment>
            <div className="content">
                <h1><span>You Scored:</span></h1>
                <h3>{props.score} / 10</h3>
            </div>
        </React.Fragment>
    );
}

export default Finished;