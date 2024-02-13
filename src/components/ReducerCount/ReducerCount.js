import React, { useReducer } from "react";
const inatialState = { count: 0 };
const reducer = (state,action) =>{
    switch(action.type){
        case 'INCREMENT':
            return{count: state.count + 1}
            break;
            default:
              return state;
              case 'DICREMENT':
                return{count: state.count - 1}
                
             
              
    }
   
  

}
const ReducerCount = () => {
  const [state, dispatch] = useReducer(reducer, inatialState);
  return (
    <div>
      <h1> This is reducer Count {state.count}</h1>
      <button onClick={()=>dispatch({type: 'INCREMENT'})}>Increment</button>
      <button onClick={()=>dispatch({type: 'DICREMENT'})}>DICREMENT</button>
 
    </div>
  );
};

export default ReducerCount;
