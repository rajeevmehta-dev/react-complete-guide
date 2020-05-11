import React, { Component, Fragment } from "react";
import PersonList from '../../components/Person-List/Person-List';
import Cockpit from '../../components/Cockpit/Cockpit';
import Auxiliary from '../Auxiliary/auxiliary';
import classes from './App.module.css';
import HocWithClass from '../HOC/HocWithClass';
import AuthContext from '../../components/AuthContext/auth-context';
class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    Persons: [
      {
        name: "Rajeev",
        age: 29,
        id: 12

      },
      {
        name: "Anup",
        age: 26,
        id: 13
      },
      {
        name: "Ankit",
        age: 24,
        id: 14
      },
      {
        name: "Yusaf",
        age: 21,
        id: 15
      },
    ],
    showData: false,
    showCockPitButton: true,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App,js] componentDidUpdate');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  onClickHandler = (paramA, paramB, index) => {
    const stateObj = this.state['Persons'];
    stateObj[index].name = paramA;
    stateObj[index].age = paramB;
    this.setState(stateObj);
  }


  onChangeHandler = (personId, $event) => {
    const personsDummy = [...this.state.Persons];
    const personIndex = personsDummy.findIndex((itemObj) => {
      return (itemObj.id === personId)
    })
    personsDummy[personIndex].name = $event.target.value;
    this.setState({ Persons: personsDummy });
  }

  onChangeToggle = () => {
    const showValue = this.state.showData;
    this.setState({ showData: !showValue });
  }

  onDeleteItem = (index) => {
    const personDummy = [...this.state.Persons];
    personDummy.splice(index, 1);;
    this.setState({ Persons: personDummy });
  }

  onClickLogin = () => {
    this.setState({'authenticated' : true})
  }

  render() {
    console.log('[App.js] rendering......');
    let renderValue = null;
    if (this.state.showData) {
      renderValue = (
        <PersonList
          PersonsListData={this.state.Persons}
          onChangeHandler={this.onChangeHandler}
          delete={this.onDeleteItem}
        ></PersonList>
      )
    }
    return (
      <Auxiliary>
        <AuthContext.Provider value = {{authenticated : this.state.authenticated, login : this.onClickLogin}}>
        <button onClick={() => this.setState({ showCockPitButton: false })}
        className = {classes.Button}
        ref = {this.toggleBtnRef}>Remove Cockpit</button>
        {
          (this.state.showCockPitButton) ?
            <Cockpit
              PersonsListData={this.state.Persons}
              onChangeToggle={this.onChangeToggle}
              showPerson={this.state.showData}
            ></Cockpit>
            : null
        }
        {renderValue}
        </AuthContext.Provider>
        </Auxiliary>
     
    )
  }
}
export default HocWithClass(App, classes.Red);
