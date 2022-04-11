import { Component } from "react";
import Child from "./child";
// children --> 相当于 slot 插槽
class App extends Component {
  render() {
    return <Child>
      <>
        <p>这是App中的child</p>
        <p>这是App中的child-2</p>
        <p>这是App中的child-3</p>
      </>
    </Child>
  }
}

export default App;
