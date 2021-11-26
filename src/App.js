import './App.css';

import Home from './containers/home'
import Projects from './containers/projects'
import Resume from './containers/resume'
import links from "./information/links.json";

import NavigationBar from "./components/nav_bar";

import { Route, Redirect, HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavigationBar></NavigationBar>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/home"></Redirect>}
        ></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/resume" component={Resume}></Route>
        <Route path="/projects" component={Projects}></Route>
        {links.map((link) =>
          link.ids.map((id) => {
            return (
              <Route
                path={`/${id}`}
                render={() => (window.location.href = link.link)}
              />
            );
          })
        )}
      </HashRouter>
    </div>
  );
}

export default App;
