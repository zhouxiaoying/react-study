import { useState } from "react";
/*
  React Hooks：在 React 16.7 中实验性添加，React 16.8 中正式添加
  hook: 
    1. 钩子函数，解决在 React 中逻辑复用问题(与状态相关的逻辑复用问题)
    2. 可以使 函数组件，可以拥有 状态以及其他类组件的功能。

  内置:
    useState -- 使函数组件可以使用状态
      [state,setState]=useState(init);
      [状态,修改该状态的方法] = useState(该状态的初始值);  
  
  自定义:
  
*/
function App(){
  const [count,setCount] = useState(1);
  const [nub,setNub] = useState(10); 
  return <div>
      <p>{count}</p>
      <button onClick={()=>{
        setCount(count+1);
      }}>递增</button>
      <p>{nub}</p>
      <button onClick={()=>{
        setNub(nub+5);
      }}>递增</button>
  </div>
}

export default App;
