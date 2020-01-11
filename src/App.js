import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import conditionActions from './actions/conditionActions';
import placeActions from './actions/placeActions';
import './App.css';
class App extends Component {

  simpleAction = (event) => {
    this.props.setLatLng(213, 213);
    this.props.fetchPlaces({ price: '₱' });
  }

  render() {
    return (
      <div className="App">
        <h1>Hot Reddit Posts</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload
        </p>
        <pre>{JSON.stringify(this.props)}</pre>
        <button onClick={this.simpleAction}>Test redux action</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setLatLng: conditionActions.setLatLng,
    fetchPlaces: placeActions.fetchPlaces,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);