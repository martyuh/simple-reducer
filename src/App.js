import {useReducer} from 'react'
import './App.css';

const countReducer = (state,action)=>{
 switch(action.type){
   case 'INCREMENT':
    //  state is passed in from useReducer as an object and should be updated as such
     return {count:state.count+action.payload}
   case 'DECREMENT':
     return {count:state.count-action.payload}
   case 'RESET':
     return{count:0}
    default:
    return state
 }

}

function App() {
  // when useReducer is called you must pass in the countreducer and the initial value of the state. usereducer makes a piece of state for you
  // usereducer returns the state and a dispatch function, which you can use to access the reducer
  //dispatch uses countreducer and dispatches an action to it d
  //whatever is returned from the countreducer will update the state
  const [state,dispatch]=useReducer(countReducer,{count:0})



  return (
    <div className="App">
      <h1>{state.count}</h1>
      {/* dispatch must pass an action with an object with type and payload that usereducer returns */}
      <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
      <button onClick={()=>dispatch({type:'DECREMENT',payload:1})}>Subtract 1</button>
      <button onClick={()=>dispatch({type:'INCREMENT',payload:1})}>Add 1</button>
      <button onClick={()=>dispatch({type:'INCREMENT',payload:5})}>Add 5</button>
    </div>
  );
}

export default App;
