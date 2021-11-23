
import './App.css';
import Navbar from './components/Navbar';
import Sort from './components/Sort';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
      
      <Switch>
      <Navbar/>
          <Route exact path="/sorting">
           <Sort/>
          </Route>
          <Route exact path="/graph"></Route>
        </Switch>
      </div>
    </Router>   
  );
}

export default App;
