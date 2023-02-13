import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';

const EmpItem = styled.div`
  background-color: lightblue;  
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);

  a {
    display: block;
    margin: 10px 0;
    color: ${props => props.active ? 'orange' : 'gray'};
  }

  input {
    display: block;
    margin-top: 10px;
  }
`;

const Header = styled.h2`
  font-size: 22px;
`;

export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0, 0, 0, .2);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
`;

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      position: ''
    }
  }

  nextYear = () => {
    this.setState(prev => ({
      years: prev.years + 1
    }))
  }

  commitInputChanges = (e) => {
    this.setState({
      position: e.target.value
    })
  }

  render() {
    const {name, surname, link} = this.props;
    const {position, years} = this.state;
    return (
      <EmpItem active>
        <Button onClick={this.nextYear}>+++</Button>
        <Header>
          My name is {name}, 
          surname - {surname}, 
          age - {years}, 
          position - {position}
        </Header>
        <a href={link}>My profile</a>
        <form>
          <span>Enter position</span>
          <input type="text" onChange={this.commitInputChanges}/>
        </form>
      </EmpItem>
      );
  }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;

const DynamicGreeting = (props) => {
  return (
    <div className={`mb-3 p-3 border border-${props.color}`}>
      {
        React.Children.map(props.children, child => {
          return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
        })
      }
    </div>
  )
}

function App() {
  return (
    <Wrapper>
      <DynamicGreeting color="primary">
        <h1>Hello World</h1>
        <h2>Nice to meet you!</h2>
      </DynamicGreeting>
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="John" surname="Shepard" link="twitter.com" />
    </Wrapper>
  );
}

export default App;
