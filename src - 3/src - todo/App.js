import { Component } from "react";
import Stats from "./stats";
import Todos from "./todos";
import "./index.css";
class App extends Component {
  state={
    data:[
      {
        id: 1,
        title: "本赛季要上王者",
        done: true
      }, {
        id: 2,
        title: "从老婆手里要到卖皮肤的钱",
        done: false
      }
    ]
  }
  addTodo=(title)=>{
    const {data} = this.state;
    // state 属于不可变量，唯一修改 state 的办法，就是通过 setState，去映射一个新的state，尤其注意 state 中有引用类型时，不要修改原有引用，而是返回一个新的引用
    // 错误演示
    // data.push({
    //   id: Date.now(),
    //   title,
    //   done: false
    // });
    this.setState({
      data:[...data,{
        id: Date.now(),
        title,
        done: false
      }]
    });
  }
  //删除todo
  removeTodo=(id)=>{
    const {data} = this.state;
    this.setState({
      data:data.filter(item=>item.id!==id)
    });
  }
  // 修改完成状态
  changeDone=(id,done)=>{
    let {data} = this.state;
    // data.forEach(item=>{
    //   if(item.id === id){
    //     item.done = done;
    //   }
    // })
    data = data.map(item=>{
        if(item.id === id){
          return {
            ...item,
            done
          }
        }
        return item;
    });
    this.setState({
      data
    });
  }
  //编辑todo
  editTodo=(id,title)=>{
    let {data} = this.state;
    data = data.map(item=>{
        if(item.id === id){
          return {
            ...item,
            title
          }
        }
        return item;
    });
    this.setState({
      data
    });
  }
  keyDownEventer=(e)=>{
    if(e.keyCode === 13){ //回车键
      let val = e.target.value;
      if(val.trim()){
         this.addTodo(val); 
         e.target.value="";
      }
    }
  }
  render() {
    const {data} = this.state;
    return <div id="todoapp">
      <div className="title">
        <h1>todo</h1>
      </div>
      <div className="content">
        <div id="create-todo">
          <input 
            id="new-todo" 
            placeholder="What needs to be done?" 
            autoComplete="off" 
            type="text" 
            onKeyDown={this.keyDownEventer}
          />
        </div>
        <Todos 
            data={data}
            removeTodo={this.removeTodo}
            changeDone={this.changeDone}
            editTodo={this.editTodo}
        />
        <Stats 
            data={data}
        />
      </div>
    </div>
  }
}

export default App;
