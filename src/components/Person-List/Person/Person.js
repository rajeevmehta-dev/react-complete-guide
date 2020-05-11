import React, { Component, useRef, useEffect, useContext } from 'react';
import classes from './Person.module.css';
import PropTypes from 'prop-types';
import AuthContext from '../../AuthContext/auth-context';
const Person = (props) =>  {
    const context = useContext(AuthContext);
    const inputRef = useRef(null);
    useEffect( () => {
        inputRef.current.focus();
        return () => {
        }
    }, []);

    return (
        <div className={classes.Person}>
           {context.authenticated ? 'Authenticated' : 'UnAuthenticated'}
            <p onClick={props.clickToChange}> My name is {props.name} and age is {props.age}
                <button onClick={props.delete}>Delete Button</button>
            </p>
            {props.children}
            <input type='text' onChange={props.changeValueEvent}
                value={props.name}
                ref={inputRef}
            ></input>
        </div>
    )
}
Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}
export default Person;