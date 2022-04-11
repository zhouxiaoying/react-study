import { Component } from "react";
import Li from "./li";
/*
  受控组件: 将组件的状态和表单控件的内部状态进行绑定

  非受控组件：在React中，给表单控件设置 value 或者 checked 属性，React 就认为我们想要做受控组件，如果希望只是设置组件的初始值，而非受控组件，可以使用 defaultValue 或 defaultChecked。 
*/
class App extends Component {
  state={
    data:[{
      id: 1,
      title: "列表项-1"
    },{
      id: 2,
      title: "列表项-2"
    }],
    val:"" 
  }
  render() {
    const {data,val} = this.state;
    return (
      <>
         <ul>
           {data.map(item=><Li 
              key={item.id}
              data={item}
           />)}
         </ul> 
         <input 
            type="text" 
            value={val}
            onChange={({target})=>{
              this.setState({
                val: target.value
              })
            }}
         />
         <p>{val}</p>
         <button onClick={()=>{
            this.setState({
              data:[...data,{id:Date.now(),title:val}],
              val: ""
            })
         }}>添加</button>
         <input type="text" defaultValue="张三" />
      </>
    )
  }
}

export default App;
