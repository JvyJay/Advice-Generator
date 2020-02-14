import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchQuote } from '../actions/index';

const GenerateQuote = props => {
  const [saved, setSaved] = useState([]);
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className='ui container middle aligned center aligned'>
        <h1 className='ui center aligned header'>Advice Generator</h1>
        <button
          onClick={props.fetchQuote}
          className='positive ui button center aligned'
        >
          Generate Quote
        </button>
        {props.isLoading && (
          <button className='ui basic loading button'>Loading</button>
        )}
        {props.quote && !props.isLoading && (
          <div className='ui centered card'>
            <div className='content'>
              <div className='header'>Advice Slip</div>
              <div className='description'>{props.quote.slip.advice}</div>
            </div>
            <div className='ui bottom attached button'>
              <i className='heart icon'></i>
              Save Advice
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    quote: state.quote,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchQuote })(GenerateQuote);
