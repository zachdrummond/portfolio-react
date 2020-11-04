import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={About}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;