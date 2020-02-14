import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import GenerateQuote from './GenerateQuote';
import SavedList from './SavedList';

const NavRouter = () => {
  return (
    <Router>
      <div className='ui menu'>
        <Link to='/advice'>
          <a className='item'>Home</a>
        </Link>
        <Link to='/saved-advice'>
          <a className='item'>Saved Advice</a>
        </Link>
      </div>
      <Switch>
        <Route path='/advice' component={GenerateQuote} />
        <Route path='/saved-advice' component={SavedList} />
      </Switch>
    </Router>
  );
};

export default NavRouter;
