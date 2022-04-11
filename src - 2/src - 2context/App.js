import { Component } from "react";
import Child from "./child";
import { Provider } from "./context";
class App extends Component {
  state={
     count: 1,
     nub: 10
  }
  addCount=()=>{
    this.setState({
      count: this.state.count + 1
    })
  }
  addNub = ()=>{
    this.setState({
      nub: this.state.nub + 5
    })
  }
  render() {
    const {count,nub} = this.state;
    return (
      // Provider 的 value 属性中定义的是要传递给后代组件的数据
      <Provider
        value={{
          count,
          nub,
          addCount: this.addCount,
          addNub: this.addNub
        }}
      >
        <Child />
      </Provider>
    )
  }
}

export default App;
