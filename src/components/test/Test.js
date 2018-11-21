import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: ''
  };

  componentDidMount() {
    console.log('componentDidMount...');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title
        })
      );
  }

  componentWillMount() {
    console.log('componentWillMount...');
  }

  render() {
    const { title } = this.state;

    return (
      <div>
        <h1>Test Component</h1>
        <h2>{title}</h2>
      </div>
    );
  }
}

export default Test;
