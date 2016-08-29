import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as tradAction from '../../actions/tradsAction';
import Intro from './Intro';
import SavoirFaire from './SavoirFaire';

const HomePage = (props) => (
  <div>
    <Intro taratata={ props.trads }/>
    <SavoirFaire />
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  trads: state.trads,
});

const mapDispatchToProps = (dispatch) => ({
  getTrads: bindActionCreators(tradAction.getTrads, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
