import { Component } from "react";
//editing
/*
 在 React 中，父组件更新，一定会引起子组件更新，但子元素不一定需要更新，
 这是就需要使用 SCU 或 PureComponent 来对组件更新进行优化。
*/
class Todo extends Component {
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.data !== this.props.data;
    }
    render(){
        const {data,changeDone,removeTodo} = this.props;
        const {id,title,done} = data;
        // console.log(id,"组件更新了");
        return  <li className="">
        <div className={`todo ${done?"done":""}`}>
          <div className="display">
            <input 
                className="check" 
                type="checkbox" 
                checked={done} 
                onChange={({target})=>{
                    changeDone(id,target.checked);
                }}
            />
            <div className="todo-content">{title}</div><span className="todo-destroy"></span>
          </div>
          <div className="edit"><input className="todo-input" type="text" /></div>
        </div>
      </li>;
    }
}
export default Todo;
