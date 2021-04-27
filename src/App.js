import './App.css';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Login from './Components/Login';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
        </Switch> 
      </Router>

    </div>
  );
}

export default App;
