import React from 'react';
import Calculator from './components/calculator/Calculator';
import HomeSI from './components/HomeSI/HomeSI';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/homepage/Home';
import CoursesHome from './components/Courses/CoursesHome'


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/Calculator' render={() => <Calculator />} />
          <Route exact path='/HomeSI' render={() => <HomeSI />} />
          <Route exact path='/courses' render={() => <CoursesHome />} />
        </Switch>
      </Router>

    </div>

  );
}

export default App;
