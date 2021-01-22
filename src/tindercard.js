import React,{useState,useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import axis from './axios';
import "./tindercard.css"
function Tindercards() {
const [people, setPeople] = useState([])
useEffect(()=>{
 async function fetchdata(){
   const req = await axis.get('/tinder/card')
   setPeople(req.data);
 }
 fetchdata();

},[])
 
const onSwipe = (direction) => {
  console.log('You swiped: ' + direction)
}
 
const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + ' left the screen')
}


return(
 <div className="tindercards">
  <div className="tindercard__container">
  {people.map((person)=>{
return(<>
  <TinderCard  className="swipe"
   onSwipe={onSwipe} key={person.name} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}
  >
  <div
  style={ {backgroundImage:`url(${person.url})`}} className="card">
   <h3>{person.name}</h3>
  </div>

  </TinderCard>
</>)

   
  })}
  </div>
 </div>
)
}

export default Tindercards;
