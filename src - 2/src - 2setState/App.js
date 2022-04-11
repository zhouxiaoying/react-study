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

  !!! 在 React 中 state 是不可变值，修改state的唯一办法是，调用 setState 根据原有 state 映射出一个新的 state 
*/
/*
   setState 在批更新机制下，表现为异步，否则为同步
   setState 在 React 可以控制的方法中(React 的生命周期函数 & React事件) 表现为异步，在微任务中以及DOM事件中，表现为同步 
*/
class App extends Component {
  state={
     count: 1
  }
  addCount = ()=>{
    this.setState({
      count: this.state.count + 1
    });
    console.log(this.state.count);//
    this.setState({
      count: this.state.count + 1
    });
    console.log(this.state.count);//
    this.setState({
      count: this.state.count + 1
    });
    console.log(this.state.count);//
    this.setState({
      count: this.state.count + 1
    });
    console.log(this.state.count);//
  }
  render() {
    console.log("render");
    const {count} = this.state;
    return (
      <div>
          <p>{count}</p>
          <button onClick={this.addCount}>递增</button>
          <button onClick={()=>{
              setTimeout(()=>{
                this.addCount();
              })
          }}>递增2</button>
      </div>
    )
  }
}

export default App;
