import React, { Component } from 'react';
import './App.css';

// child component
class SimpleComponent extends React.Component{
  render() {
    return <h2>Simple Class Component</h2>
  }
}

// child component
class WithState extends Component{
  constructor(props) {
    super(props)
    this.state = {color: 'red', firstName: 'Steph'}
    console.log(this.state.color)
    console.log(this.props)
  }

  render() {
    return <>
    <h2 style={{color: this.state.color}}>(Simple Class Component) with State {this.state.color}</h2>
    <h2>my name is {this.state.firstName}</h2>
    <h3>{this.props.someProps} </h3>
    </>
  }
}

class Car extends Component{
  constructor() {
    super(); 
    this.state = {brand: 'Ford', model: 'Mustang', color: 'red', year: 1964}
  
  }

  changeColor = () => {
    this.setState({color: 'blue'})
  }

  componentDidMount() {
    console.log('component mounted')
    fetch('https://api.sampleapis.com/futurama/info')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
  }

  componentDidUpdate() {
    console.log('component was updated')
  }

  componentWillUnmount() {
    alert('compenent being unmounted')
  }

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          is a {this.state.color} {this.state.model} from {this.state.year}
        </p>
        <button onClick={this.changeColor}>Change color</button>
      </div>
    )
  }
}

// parent component
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Class Components</h1>
       <Car />
       {/* <SimpleComponent />
       <WithState someProps={'here are my props from parent'} /> */}
      </header>
    </div>
  );
}

export default App;
