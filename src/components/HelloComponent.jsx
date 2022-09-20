import React, {Component} from "react";

class HelloComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: ''
    }
    
  }

  incrementCount = () => {
    this.setState(
      this.state.count + 1
  )
  }

  incrementCount1 = () => {
    this.setState(prevstate => {
      return {
        count: prevstate.count + 1
      }
    })
  }

  componentDidMount() {
    document.title = `Clciked ${this.state.count} times`
  }

  componentDidUpdate(prevprops) {
    console.log(`Updating document ${this.state.name}`)
    document.title = `Click ${this.state.count} times`
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value})} />
        <p>Count: </p>
        <button onClick={this.incrementCount1}>Count {this.state.count}</button>
      </div>
    )
  }
}

export default HelloComponent;