import React from 'react';

const Display = (props) => {
    return (
        <div>
            <div className="ball-display">Ball: {props.ball}</div>
            <div className="strike-display">Strike:{props.strike}</div>
        </div>
    )
}

export default Display;