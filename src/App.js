import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/portfolio-react/" component={About} />
          <Route exact path="/portfolio-react/about" component={About} />
          <Route exact path="/portfolio-react/portfolio" component={Portfolio} />
          <Route exact path="/portfolio-react/contact" component={Contact} />
          <Route path="/" component={About} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
