import React, { Component } from 'react';

import axios from 'axios';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: '',
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  fetchValues = async () => {
    try {
      const values = await axios.get('/api/values/current');
      this.setState({ values: values.data });
    } catch (error) {
      console.error(error);
    }
  };

  fetchIndexes = async () => {
    try {
      const seenIndexes = await axios.get('/api/values/all');
      this.setState({ seenIndexes: seenIndexes.data });
    } catch (error) {
      console.error(error);
    }
  };

  handleSubmit = async event => {
    try {
      event.preventDefault();
      await axios.post('/api/values', {
        index: this.state.index,
      });
      this.setState({ index: '' });
    } catch (error) {
      console.error(error);
    }
  };

  renderSeenIndexed = () => {
    return (this.state.seenIndexes || []).map(({ number }) => number).join(', ');
  };

  renderValues = () => {
    const entries = [];
    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For index {key} i calculated {this.state.values[key]}
        </div>
      );
    }
    return entries;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter you index:</label>
          <input value={this.state.index} onChange={e => this.setState({ index: e.target.value })} />
          <button>Submit</button>
        </form>

        <h3>Indexes i have seen:</h3>
        {this.renderSeenIndexed()}

        <h3>Calculated values:</h3>
        {this.renderValues()}
      </div>
    );
  }
}

export default Fib;
