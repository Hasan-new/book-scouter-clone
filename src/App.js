import logo from './logo.svg';
import './App.css';
import Blog from './Components/Blog/Blog';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route path='/'>
              <Blog></Blog>
          </Route>
        </Switch>
    </Router>
      {/* added my burj-al-arab's appID */}
      <MessengerCustomerChat pageId="107001421277135" appId="655923621786742" />
    </>
  );
}

export default App;
