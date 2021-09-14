import React, { Component} from 'react'
import styled from 'styled-components'

const WrappJam = styled('div')`
    width:120px;
    letter-spacing:2px;
    padding: 10px 0;
    border-radius:4px;
    text-align:center;
    font-size:14px;
    border:1px solid #d1d1d1;
`
class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
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
  
   
    render() {
      return (
        <div>
        <WrappJam>{this.state.date.toLocaleTimeString("id-ID")}</WrappJam>
        </div>
      );
    }
  }
  export default Clock
  