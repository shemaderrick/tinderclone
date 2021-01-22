import React from 'react';
import  "./app.css";
import Header from './header';
import Tindercards from "./tindercard";
import Swipebuttons from "./swipebuttons"
function App(){
 return (
  <div className="app">
<Header/>
<Tindercards/>
<Swipebuttons/>
 </div>
 )
 
}
export default App;