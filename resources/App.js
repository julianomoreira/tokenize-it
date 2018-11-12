import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      bgColor: 'red'
    }
    this.handClick = this.handClick.bind(this);
  }
  handClick() {
    alert("I was clicked")        
    this.setState({
      bgColor: 'blue'
    })
  }

  render(){
    return (
      <div>        
          <h1>Hello boy!</h1>          
          <Button onClick={this.handClick} style={{backgroundColor:this.state.bgColor}}>Click me</Button>
          <Button>Click me 2!</Button>
          <Button bsStyle="primary">Primary</Button>
      </div>
    )
  }
}

export default App;
