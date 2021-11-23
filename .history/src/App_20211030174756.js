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
          <Route exact path="/Selection"></Route>
          <Route exact path="/Bubble"></Route>
          <Route exact path="/Insertion"></Route>
          <Route exact path="/Merge"></Route>
          <Route exact path="/Quick"></Route>
        </Switch>

    </Router>
    </div>
  );
}

export default App;
