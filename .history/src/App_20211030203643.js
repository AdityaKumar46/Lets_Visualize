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
import Selection from './components/Selection';

function App() {
  return (
    <Router>
      <div>
      <Navbar/>

      <Switch>
          <Route exact path="/sorting"></Route>
          <Route exact path="/graph"></Route>
        </Switch>
      </div>
    </Router>   
  );
}

export default App;
