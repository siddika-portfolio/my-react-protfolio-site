import './App.css'
import Header from './component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Projects from './component/Projects/Projects';
import Blogs from './component/Blogs/Blogs';
import ContactForm from './component/ContactForm/ContactForm';
import About from './component/About/About';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/home">
            <Header></Header>
          </Route>
          <Route path="/project">
            <Projects></Projects>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/blog">
            <Blogs></Blogs>
          </Route>
          <Route path="/contact">
            <ContactForm></ContactForm>
          </Route>
          <Route path="/">
            <Header></Header>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
