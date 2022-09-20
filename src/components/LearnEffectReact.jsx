import React, {Component} from 'react';

class LearnEffectReact extends Component() {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: '',
    }
  }

  componentDidMount() {
    // When the user clicks on
    document.title = `Click on ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count) {
      console.log('Updating document title');

      document.title = `Clicked ${this.state.count} times`;
    }
  }
  render() {
    return(
      <div className="">
        <input 
          type="text" 
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value})}
          />
          <button>Submit</button>
      </div>
    );
  }
};

export default LearnEffectReact;