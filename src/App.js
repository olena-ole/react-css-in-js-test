import { Component } from 'react';
import styled from 'styled-components';

import './App.css';

const EmpItem = styled.div`
  background-color: lightblue;  
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
`;

const Header = styled.h2`
  font-size: 22px;
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

  commitInputChanges = (e, color) => {
    console.log(color)
    this.setState({
      position: e.target.value
    })
  }

  render() {
    const {name, surname, link} = this.props;
    const {position, years} = this.state;
    return (
      <EmpItem>
        <button onClick={this.nextYear}>+++</button>
        <Header>
          My name is {name}, 
          surname - {surname}, 
          age - {years}, 
          position - {position}
        </Header>
        <a href={link}>My profile</a>
        <form>
          <span>Enter position</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
        </form>
      </EmpItem>
      );
  }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="John" surname="Shepard" link="twitter.com" />
    </Wrapper>
  );
}

export default App;
