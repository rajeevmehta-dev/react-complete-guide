import React, { useEffect, useRef, useState } from 'react';

import classes from './Cockpit.module.css';
const Cockpit = (props) => {
    const [cockpitStateObj, setCockpitValue] = useState({ 'inputValue': 'rajeev' });
    const inputRef = useRef(null);
    useEffect(() => {
        console.log('[Cockpit.js] useEffect is running');
        inputRef.current.focus();
        return () => {
            console.log('[Cockpit.js] useEffect is running clean up');
        }
    },[]);
    let btnClass = '';
    if (props.showPerson) {
        btnClass = classes.Red;
    }

    const onChangeValue = ($event) => {
        const stateObj = { ...cockpitStateObj };
        stateObj['inputValue'] = $event.target.value;
        setCockpitValue(stateObj);
    }
    return (
        <div className={classes.Cockpit}>
            <h1> My First React App</h1>
            <button className={btnClass} onClick={props.onChangeToggle}>Toggle</button>
            <div>
                <input type='text' value={cockpitStateObj.inputValue} ref={inputRef} onChange={($event) => {
                    onChangeValue($event)
                }} />
            </div>
        </div>
    )
}

export default Cockpit;