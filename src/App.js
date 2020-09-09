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
import CoursesMenu from './components/Courses/CoursesHome'
import Invest from './components/investCourses/Invest';
import InvestF from './components/investF/InvestF';
import Quiz from './components/quiz/Quiz';


function App() {
  return (
    <div>
      <Router >
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/Calculator' render={() => <Calculator />} />
          <Route exact path='/HomeSI' render={() => <HomeSI />} />
          <Route exact path='/courses' render={() => <CoursesMenu />} />
          <Route exact path='/Invest' render={() => <Invest />} />
          <Route exact path='/InvestF' render={() => <InvestF />} />
          <Route exact path='/Quiz' render={() => <Quiz />} />
        </Switch>
      </Router>

    </div>

  );
}

export default App;
