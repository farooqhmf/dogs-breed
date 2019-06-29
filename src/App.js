import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDogsData } from './action'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getDogsData());
  }
  render() {
     const dogKey = this.props.dogList;
    return (
      <div className="App">
        <br/>
        <div><h1>Dogs Breed</h1></div>
        <ol>
          {
            dogKey && dogKey.map( key => <li key={key}><Link to={`/dogdetail/${key}`}>{key}</Link></li>)

          }
        </ol>
      </div>
    );
  }
}

const mapstateToProps = state => {
  return {
    dogList: state.dogList,
  }
}
export default connect(mapstateToProps)(App);
