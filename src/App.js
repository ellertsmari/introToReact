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
    const getData = async ()=>{
      const r = await fetch("https://api-rent.myigloo.is/api/2019-10/listings/");
      const json = await r.json();
      console.log("this is the json", json);
    }
    
    getData();
    console.log("this is after the getData");
    // const test = fetch("https://api-rent.myigloo.is/api/2019-10/listings/")
    // .then(r=>{
    //   console.log("this is theparameter in then argument",r)
    //   return r.json();
    // })
    // .then(json =>{
    //   console.log("this is the json", json);
    // })
    // console.log("this is test:",test);
    
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
            //make an Event component and use <Event/> in stead of this code
            <div key={i}>
              <img
                width="50%" 
                src={`https://www.harpa.is/${imgUrl}`} 
                alt={event.name}
              />
              <h2>{event.name}</h2>
            </div>
            //here ends the component
          )
        })}
      </div>
    </>
  )
  ;
}



export default App;
//come back 11:20