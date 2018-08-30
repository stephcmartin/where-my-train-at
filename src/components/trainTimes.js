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
          <div key={traintimes.id}>
          <h4>Train Station: {traintimes.relationships.stop.data.id}</h4>
          <p>Arrival Time: {traintimes.attributes.arrival_time}</p>
          <p>Departure Time: {traintimes.attributes.departure_time}</p>
          <p>Status: {traintimes.attributes.status}</p>
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
