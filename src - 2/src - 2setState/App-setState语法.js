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
*/
class App extends Component {
  state={
     count: 1,
     nub: 10
  }
  render() {
    const {count,nub} = this.state;
    return (
      <div>
          <p>count:{count}</p>
          <button onClick={()=>{
              this.setState({
                count: count + 1
              },()=>{
                console.log("当做这次操作引起的组件更新，更新完成")
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
      </div>)
  }
}

export default App;
