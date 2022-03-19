import React from 'react';
import DeviceDetails from '../DeviceDetails/DeviceDetails';
import './Device.css'
const Device = (props) => {
    const { name, price } = props;
    return (
        <div>
            <h2 >I have : {name}</h2>

            <DeviceDetails price={price}></DeviceDetails>

        </div>
    );
};

export default Device;