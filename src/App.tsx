import React from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import QuestionPage from './Pages/QuestionsPAGE'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/QusetionsPage" component={QuestionPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
