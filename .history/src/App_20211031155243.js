
import './App.css';
import Navbar from './components/Navbar';
import sort from './components/sort';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
      <sort/>
      <Navbar/>
      <Switch>
          <Route exact path="/sorting">
           
          </Route>
          <Route exact path="/graph"></Route>
        </Switch>
      </div>
    </Router>   
  );
}

export default App;
