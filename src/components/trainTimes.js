import React, { Component } from 'react';
import { fetchTrainTimes } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import _ from 'lodash';


export class Summary extends Component {
    constructor(props){
      super(props)
    }

    componentDidMount(){
      this.props.fetchTrainTimes()
    }

  

    render(){
      console.log('this.props', this.props.traintimes)
      const renderTrainTimes = _.map(this.props.traintimes, traintimes => {
        return (
          <div>
          {traintimes.attributes.departure_time}
          {traintimes.attributes.status}
          </div>
        )
        
       }
     )

      return (
          <div>
          <h4>Train Times</h4>
          {renderTrainTimes}
          </div>
      )
    }
  }

  function mapDispatchToProps(dispatch){
      return bindActionCreators ({ fetchTrainTimes }, dispatch)
    }

    function mapStateToProps (state){
      return {
        traintimes : state.traintimes.traintimes,
        loading: state.traintimes.loading
      };
    }

  export default connect(mapStateToProps, mapDispatchToProps)(Summary)
