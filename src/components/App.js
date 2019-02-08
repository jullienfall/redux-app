import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

import Header from './common/Header';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading} />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
};

export default connect(mapStateToProps, null)(App);
