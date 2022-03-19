import React from 'react';

const Display = (props) => {
    return (
        <div style={{ border: '3px solid green', margin: '20px', backgroundColor: 'green' }}>
            <h2>Name :{props.name}</h2>
            <h1>So far steps : {props.steps}</h1>
        </div>
    );
};

export default Display; 