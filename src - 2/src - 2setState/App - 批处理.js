import { Component } from "react";
/*
setState(updater, [callback])
    - updater: 更新数据 FUNCTION/OBJECT
      - OBJECT 要更新的状态
      - FUNCTION 返回值是要更新的状态
    - callback: 更新成功后的回调 FUNCTION
    - 批处理: react通常会集齐一批需要更新的状态，然后一次性更新来保证渲染的性能
    - 浅合并 Objecr.assign()
    - 调用 setState 之后，会触发生命周期，重新渲染组件

批处理:
  1. 正常情况下，在一个操作中多次调用 setState，React 会合并这些更新，只更新一次组件
  setState 是同步还是异步的

  !!!在 React 中 state 是不可变值，修改state的唯一办法是，调用 setState 根据原有 state 映射出一个新的 state 
*/
class App extends Component {
  state={
     count: 1,
     nub: 10,
     data:["a","b","c","d"]
  }
  render() {
    const {count,nub,data} = this.state;
    return (
      <div>
          <p>count:{count}</p>
          <button onClick={()=>{
              this.setState({
                count: count + 1
              })
          }}>count递增</button>
          <p>nub:{nub}</p>
          <button onClick={()=>{
              this.setState(function(){
                return {
                  nub: nub + 5
                }
              })
          }}>nub递增</button>
          <button onClick={()=>{
              this.setState({
                count: count + 1
              });
              this.setState({
                nub: nub + 5
              })
          }}>同时递增</button>
          <ul>{
            data.map(item=><li key={item}>{item}</li>)
          }</ul>
          <button onClick={()=>{
            //data.push(Date.now()) !!! 在 React 中，不要修改 state
            this.setState({
              data:[...data,Date.now()]
            })
          }}>添加</button>
      </div>)
  }
}

export default App;
