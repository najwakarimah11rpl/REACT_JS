import logo from'/pages/logo';
import '/App.css';
import Kontak from './pages/Kontak';
import Nav from './pages/Nav';
import Sejarah from './pages/Sejarah';
import Tentang from './pages/Tentang';
import Home from './pages/Home';
import {BrowserRouter,Route,Switch} from "react-router-dom";

function App(){
return(
  <BrowserRouter>
  <div className="App"> 
  <Switch>
    <Route path='/home' component={Home} exact></Route>
    <Route path='/kontak' component={Kontak}/>
    <Route path='/sejarah' component={Sejarah}></Route> 
    <Route path='/tentang' component={Tentang}></Route>
  </Switch> <div/>
  </BrowserRouter>)
return(
      <div className="App">
        <h1>kontak smkrevit</h1>
        <p>sidoarjo</p>
      </div>
    )}
  export default Kontak;