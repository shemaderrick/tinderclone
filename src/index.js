import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css"
const books=[{
 img:"https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL._AC_UL200_SR200,200_.jpg",
title :"BECOMING",
author:"Michelle Obama"
},

{
 img:"https://images-na.ssl-images-amazon.com/images/I/91AQs6qv9ML._AC_UL200_SR200,200_.jpg",
title :"Untamed Hardcover",
author:" Glennon Doyle Melton "
},{
 img:"https://images-na.ssl-images-amazon.com/images/I/71-gFM6jsBL._AC_UL200_SR200,200_.jpg",
title :"The Ickabog",
author:"J K Rowling"
},{
 img:"https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg",
title :"A Promised Land",
author:"Barack Obama"
},{
 img:"https://images-na.ssl-images-amazon.com/images/I/51JQKqP7GmL._AC_UL200_SR200,200_.jpg",
title :"Little Blue Truck's Christmas",
author:"Alice Schertle"
},{
 img:"https://images-na.ssl-images-amazon.com/images/I/81Kc8OsbDxL._AC_UL200_SR200,200_.jpg",
title :"Greenlights",
author:"Matthew McConaughey"
},]

function Booklist(){
return(<section className="booklist">
{books.map((book)=>{
return <Book {...book}/>
}
)}
  
</section>)
}
const Book=(props)=>{
 const {img, title,author}=props;
 return <article className="book">
 <img src={img} alt="bear"/>
 <h2>{title}</h2>
<h4>{author}</h4>
 </article>
}


ReactDOM.render(<Booklist/>,document.getElementById('root'));

