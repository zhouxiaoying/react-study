import { createRef, PureComponent } from "react";
//
/*
 在 React 中，父组件更新，一定会引起子组件更新，但子元素不一定需要更新，
 这是就需要使用 SCU 或 PureComponent 来对组件更新进行优化。

 PureComponent 是 Component 的进化版，Component 有的功能它都有。在 Component 的基础上，
 PureComponent 内置了一个具有浅对比的 SCU 函数。
*/
/*
    ref: 
        1. 获取节点实例，用在组件上获取的是组件实例，用在 元素获取的是真实DOM
        2. 使用 Ref 对象，添加在 ref 属性中，react 会自动将 实例绑定如 Ref 对象 

*/
/*
    编辑功能：
        退出编辑时，判断如果为空，则恢复编辑之前的值，否则为编辑之后的值
*/
class Todo extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            isEdit: false,
            editVal: props.data.title 
         }
    }
    edit = createRef();
    todoWrap = createRef();
    // componentDidMount(){
    //     console.log(this.edit);
    //     console.log(this.todoWrap);
    // }
    componentDidUpdate(prevProps,prevState){
        if(!prevState.isEdit&&this.state.isEdit){
            this.edit.current.focus(); 
        }
    }
    render(){
        const {data,changeDone,removeTodo,editTodo} = this.props;
        const {id,title,done} = data;
        const {isEdit,editVal} = this.state;
        return  <li 
            className={isEdit?"editing":""} 
            ref={this.todoWrap}
        >
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
            <div 
                className="todo-content"
                onDoubleClick={()=>{
                    // this.setState({
                    //     isEdit: true 
                    // },()=>{
                    //    this.edit.current.focus(); 
                    // })
                    this.setState({
                        isEdit: true 
                    })
                }}
            >{title}</div>
            <span 
                className="todo-destroy"
                onClick={()=>{
                    removeTodo(id);
                }}
            ></span>
          </div>
          <div className="edit">
            {/* <input 
                className="todo-input" 
                type="text" 
                ref={(node)=>{
                    console.log(node);
                }}
                onBlur={()=>{
                    this.setState({
                        isEdit:false
                    })
                }}
            /> */}
            <input 
                className="todo-input" 
                type="text" 
                ref={this.edit}
                value={editVal}
                onChange={({target})=>{
                   this.setState({
                       editVal:target.value
                   });
                }}
                onBlur={()=>{
                    if(editVal.trim()){
                        editTodo(id,editVal);
                    } else {
                        this.setState({
                            editVal: title
                        });
                    }
                    this.setState({
                        isEdit:false
                    })
                }}
            />
          </div>
        </div>
      </li>;
    }
}
export default Todo;
