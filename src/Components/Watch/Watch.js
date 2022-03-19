import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import './Watch.css'

const Watch = () => {
    const [steps, setSteps] = useState(0)
    const increseSteps = () => {
        const newStepCount = steps + 1;
        setSteps(newStepCount)
        // for (let i = 1; i < 100; i++) {
        //     setSteps(i)
        //     console.log(i)
        // }
    }
    useEffect(() => {
        console.log(steps)
    }, [steps])

    return (
        <div style={{ border: '3px solid green', margin: '20px', backgroundColor: 'red' }}>

            <h2>This is my Smart Watch!!!</h2>
            <h3>My current steps : {steps}</h3>

            <button onClick={increseSteps}>De Dhour (Run)</button>
            <Display name="garmeen" steps={steps}></Display>
        </div >
    );
};

export default Watch; 