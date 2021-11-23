
import './App.css';
import Navbar from './components/Navbar';
import Sort from './components/Sort';
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import Selection from './components/Selection';
import Bubble from './components/Bubble';
import Insertion from './components/Insertion';
import Quick from './components/Quick';
import Heap from './components/Heap';

function App() {
  return (
    <HashRouter>
      <>
      <Navbar/>
      <Switch>
          <Route exact path="/">
           <Sort/>
          </Route>

          <Route exact path="/selection">
           <Selection/>
          </Route>

          <Route exact path="/bubble">
           <Bubble/>
          </Route>

          <Route exact path="/insertion">
           <Insertion/>
          </Route>

          <Route exact path="/quick">
           <Quick/>
          </Route>

          <Route exact path="/heap">
            <Heap/>
          </Route>
        </Switch>
      </>
    </HashRouter>   
  );
}

export default App;
