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
import SkillSection from './component/About/SkillSection/SkillSection';
import Footer from './component/Footer/Footer';
import NavbarCont from './component/Header/Navbar/NavbarCont';


function App() {
  return (
    <div className="App">
      <Router>
      <NavbarCont></NavbarCont>
        <Switch>
       
        <Route path="/home">
            <Header></Header>
          </Route>
          <Route path="/project">
            <Projects></Projects>
          </Route>
          <Route path="/about">
            <About></About>
            <SkillSection></SkillSection>
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
        <Footer></Footer>
      </Router>


    </div>
  );
}

export default App;
