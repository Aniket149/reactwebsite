import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="reactwebsite/" exact component={Home} />
        <Route path="reactwebsite/about" component={About} />
        <Route path="reactwebsite/contact" component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
