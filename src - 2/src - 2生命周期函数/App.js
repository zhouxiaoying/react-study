import { Component } from "react";
import Child from "./child";
class App extends Component {
  state={
    nub: 5,
    show: true
  }
  render() {
    const {nub,show} = this.state;
    return (
      <>
      {show?<Child 
          parentInfo={"父级传递的信息" + nub}
        />:""}
      <button onClick={()=>{
          this.setState({
            nub: nub+5
          })
      }}>nub修改</button>
      <br/>
      <button onClick={()=>{
          this.setState({
            show:!show
          })
      }}>显示隐藏</button>
      </>
    )
  }
}

export default App;
