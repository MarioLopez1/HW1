import React from 'react';
import './UserOutput.css'

const useroutput = (props) => {
    return(
        <div className="Output">
            <p>I am</p>
            <p>{props.name}</p>
        </div>
    )
};

export default useroutput;