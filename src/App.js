import {useState, useEffect} from 'react';
import Header from './components/Header'
//Component
//Props
//State

function App() {

  //similar to saying let counter = 0;
  const [counter, setCounter] = useState(0)
  const [events, setEvents] = useState([])
  //only call the set**** function inside functions in the component
  // only call fetch inside functions in the component

  useEffect(()=>{
    fetch("http://localhost:3001")
    .then(r=>r.json())
    .then(data=>{
      console.log(data.data.nextEvents.nodes);
      setEvents(data.data.nextEvents.nodes);
    })
  },[])
  const incrementCounter = ()=>{
    setCounter(counter+1);
  }
  const myFumction = ()=>{
    return "kalli fór í búð"
  }
  const string = "goodbye";
  console.log("running App");
  return (
    <>
      <Header greeding={string}/>
      <div className="App">
        Hello World: {string+" cruel world " + myFumction()}
      </div>
      <div>
        {counter}
        <button onClick={incrementCounter}>click me</button>
        {events.map((event,i)=>{
          const imgUrl= event.featuredImage.childImageSharp.resize.src;
          return(
            <div key={i}>
              <img
                width="50%" 
                src={`https://www.harpa.is/${imgUrl}`} 
                alt={event.name}
              />
              <h2>{event.name}</h2>
            </div>
          )
        })}
      </div>
    </>
  )
  ;
}



export default App;
//come back 11:20