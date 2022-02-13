
import './App.css';
import { NavBar } from './NavBar';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Loginform from './Login'
import Register from './Register'
import { Movies } from './Movies';
import {MovieDetails} from './MovieDetails'
import Favorites from './Favorites';
import { connect } from 'react-redux';
import { languagecontext } from './context/language';
import { useState } from 'react';
function App(props) {
const [langcontext,setlangcontext]=useState('en');
  return (
    
  <div className={langcontext==='ar'?"text-right":"text-left"}
   dir={langcontext ==='ar'?'rtl':'ltr'}  
  >
   
   <languagecontext.Provider value={{langcontext,setlangcontext}}>
   <Router>
   <NavBar/>
  
   <Switch>
   <Route path={"/"} exact component={Movies}/>
     <Route path={"/Login"} exact component={Loginform}/>
     <Route path={"/Register"} exact component={Register}/>
     <Route path={"/MovieDetails/:id"} exact component={MovieDetails}/>
     <Route path={"/Favorites"} exact component={Favorites}/> 
   </Switch>
   </Router>
   </languagecontext.Provider>
  
   </div>
 
  );
 
  
}
const mapStateToProps=(state)=>{
  return{
    fav:state.ADD,
   
  
  }
}


export default connect(mapStateToProps) (App);
