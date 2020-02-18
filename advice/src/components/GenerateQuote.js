import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchQuote } from '../actions/index';

const GenerateQuote = props => {
  // State for heart icon
  const [icon, setIcon] = useState('heart outline icon');

  // Heart icon toggle
  const handleClick = () => {
    if (icon === 'heart outline icon') {
      setIcon('heart icon');
    } else {
      setIcon('heart outline icon');
    }
  };
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
          <div key={props.quote.slip.slip_id} className='ui centered card'>
            <div className='content'>
              <div className='header'>Advice Slip</div>
              <div className='description'>{props.quote.slip.advice}</div>
            </div>
            <div onClick={handleClick} className='ui bottom attached button'>
              <i className={icon}></i>
              Heart Advice
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
