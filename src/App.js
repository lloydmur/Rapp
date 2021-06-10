import './App.css';
import Navbar from './components/navbar';
import Home from './views/home';
import NewPost from './components/newPost'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Router component allows use of routing/
//switch allows switching of routes
//Route are nested in switches and are basically the component you want to switch to

//router links allow browser to handle rout requests


function App() {

  return (
    <Router> 
      <div className="App">
        <Navbar/>
        <header className="App-header">
          <Switch>
            <Route path="/">
              <Home/>
            </Route>
            <Route exact path="/new-post">
              <NewPost/>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
    
  );
}

export default App;
