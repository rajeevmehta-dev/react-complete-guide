import React, { Component } from 'react';
import Person from './Person/Person';
import AuthContext from '../AuthContext/auth-context';
class PersonList extends Component {
    static contextType = AuthContext;
    componentDidMount() {
        console.log(this.context); //{}
      }
    render() {
        console.log(this.context);
        console.log('[Person-List] rendering......');
        const style = {
            display: 'block',
            margin: '0 auto'
        };
        return (
            <div>
                <button onClick={this.context.login}
                    style={style}
                >login</button>
                {
                    this.props.PersonsListData.map((item, index) => {
                        return <Person
                            name={item.name} age={item.age}
                            key={item.id}
                            changeValueEvent={this.props.onChangeHandler.bind(this, item.id)}
                            delete={() => this.props.delete(index)}
                        />
                    })
                }
            </div>
        );

    }


    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Person-list] shouldComponentUpdate.....');
        if (nextProps.PersonsListData !== this.props.PersonsListData) { // working as changes in reference.
            return true;
        } else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevPros, prevState) {
        console.log('[Person-list] getSnapshotBeforeUpdate.....');
        return { message: 'snapshot' };
    }

    componentDidUpdate() {
        console.log('[Person-list] componentDidUpdate.....');
    }
}
export default PersonList;