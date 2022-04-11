import { Component } from "react";
let data = `<h1>这是一个带有标签的数据</h1>`;
/*
  dangerouslySetInnerHTML 在元素上插入 innerHTML
  1. 接收的值是一个对象
  2. 对象下有一个__html 属性，该属性中填入该元素的 innerHTML
*/
class App extends Component {
  render() {
    return <div dangerouslySetInnerHTML={{
        __html:data
    }}></div>
  }
}

export default App;
