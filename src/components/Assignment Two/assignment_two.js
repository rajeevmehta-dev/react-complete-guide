import React, { useState } from 'react';

const AssignOne = (props) => {
    const validStyle = {
        validGreen: {
            color: 'green',
            fontWeight: '500'
        },
        validYellow: {
            color: 'yellow',
            fontWeight: '500'
        },
        validRed: {
            color: 'red',
            fontWeight: '500'
        },
    }
    let validText = null;
    if (props.name.length > 0 && props.name.length < 5) {
        validText = (<p style={validStyle.validGreen}> Text Length too short</p>);
    } else if (props.name.length > 5) {
        validText = (<p style={validStyle.validYellow}> Text Length too long</p>);
    } else {
        validText = (<p style={validStyle.validRed}> Please Insert text</p>);
    }

    return (
        <div>
            <input value={props.name} onChange={props.change}></input>
            <p>Length is : {props.name.length}</p>
            {validText}
        </div>
    )
}

const ValidationComponent = (props) => {
    return (
        <div>
            <input value={props.name} onChange={props.change}></input>
            <p>Length is : {props.name.length}</p>
        </div>
    )
}



const onChangeTextHandler = (setState, nameOfPro, $event) => {
    const stateObj = {};
    stateObj[nameOfPro] = $event.target.value;
    setState(stateObj);
}



const onChangeCharacterHandler = (setState, nameOfPro, $event) => {
    const stateObj = {};
    stateObj[nameOfPro] = $event.target.value;
    setState(stateObj);
}



const CharComponent = (props) => {
    const stringsEnter = props.name;
    return (
        <div>
            <input value={props.name} onChange={props.change}></input>
            <div>
                {
                    stringsEnter.split('').map((item, index) => {
                        return <p key={index}>Letter {++index} : {item}</p>
                    })
                }
            </div>
        </div>
    );
}



const AssignmentTwo = () => {
    const [namingObj, setName] = useState({
        name: 'rajeev'
    });
    const [validationObj, setValidationText] = useState({
        'validationTxt': ''
    })
    const [CharacterObj, setCharacterText] = useState({
        'Character': 'Suraj'
    })
    return (
        <div>
            <h3> Second Assignment Two Start</h3>
            <AssignOne name={namingObj.name}
                change={($event) => onChangeTextHandler(setName, 'name', $event)}
            ></AssignOne>
            <ValidationComponent name={validationObj.validationTxt}
                change={($event) => onChangeTextHandler(setValidationText, 'validationTxt', $event)}>
            </ValidationComponent>
            <p>Character Iterate</p>
            <CharComponent name={CharacterObj.Character}
                change={onChangeCharacterHandler.bind(this, setCharacterText, 'Character')}>
            </CharComponent>
        </div>
    );
}

export default AssignmentTwo;