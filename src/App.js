import './App.css';

import Home from './containers/home'
import Projects from './containers/projects'
import Resume from './containers/resume'

import NavigationBar from './components/nav_bar'

import { Route, Redirect, Switch, HashRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      <HashRouter>
        <NavigationBar></NavigationBar>
        <Route exact path='/' render={ () => (
          <Redirect to='/home'></Redirect>)
        }></Route>
        <Route path='/home' component={Home}></Route>
        <Route path='/resume' component={Resume}></Route>
        <Route path='/projects' component={Projects}></Route>
      </HashRouter>
      
    </div>
  );
}

export default App;
