import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes,Switch } from "react-router-dom";
import SignUpComponent from './components/SignUpComponent';
import Home from './pages/Home';
function App() {
  return (
    <div>
    <Router>
      <Switch>
          <Route  path="/" exact component={Home}></Route>
          <Route path="/signup" component={SignUpComponent}></Route>
          </Switch>
    </Router>
  </div>
  );
}

export default App;
