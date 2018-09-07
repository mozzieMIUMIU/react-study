import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React99999</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};


const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);


// 定时器
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            isOff:true,
            test:''
        };
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }

    // handleClick = (e) =>{
    //     e.preventDefault();
    //     this.setState(prevState => ({
    //         isOff: !prevState.isOff
    //     }));
    // }
    handleClick(e){
        e.preventDefault();
        this.setState(prevState => ({
            isOff: !prevState.isOff
        }));
    }
   
    render() {
        return (
        <div>
            <button  onClick={this.handleClick.bind(this)}>off{this.state.isOff ? 'on' : 'off'}</button>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            <input type="text" value={this.state.test}/>
        </div>
      );
    }
}

class ShoppingList extends React.Component {
  
  render() {
    // const t = element;
    return (
      <div className="shopping-list">
        {element}
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
export default Clock;
