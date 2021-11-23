import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Front from './components/Front';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      <Navbar/>

      <Switch>
          <Route exact path="/Selection Sort"></Route>
          <Route exact path="/Bubble Sort"></Route>
          <Route exact path="/Insertion Sort"></Route>
          <Route exact path="/Merge Sort"></Route>
          <Route exact path="/quick Sort"></Route>
        </Switch>

    </Router>
    </div>
  );
}

export default App;
