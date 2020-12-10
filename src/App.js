import logo from './logo.svg';
import './App.css';
import Blog from './Components/Blog/Blog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/'>
              <Blog></Blog>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
