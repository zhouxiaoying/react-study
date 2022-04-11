import { Component } from "react";
/*
    定义类组件：
        1. 组件必须继承自 React.Component
        2. 组件必须有一个 render 方法
        3. render 方法的返回值，是该组件要输出的视图  
    
    state 状态:
        1. React 的组件，类似状态机，状态的值不一样，组件会呈现出不同的显示，当组件的状态有修改时，视图会重新渲染 
        2. 在React state 应该是不可变值，修改 state 的唯一方式就是调用组件的 setState 方法. 


    事件:
        1. React 的事件写法，类似JS中的行距事件
        2. 事件名要注意从第二个单词开始首字母大写
        3. 注意 React 事件中，this指向为 undefined
            1. 使用箭头函数
            2. this 绑定
        4. 阻止默认事件，要使用 event.preventDefault();

*/
class App extends Component{
    state={
        count: 1
    }
    handlerClick = ()=>{
        const {count} = this.state;
        this.setState({
            count: count + 1
        })
    }
    render(){
        const {count} = this.state;
        return <>
            <p>{count}</p>
            <button onClick={this.handlerClick}>递增</button>
        </>
    }
}

// class App extends Component{
//     constructor(props){
//         super(props);
//         this.handlerClick = this.handlerClick.bind(this);
//     }
//     state={
//         count: 1
//     }
//     handlerClick = function(){
//         console.log(this);
//     }
//     render(){
//         const {count} = this.state;
//         return <>
//             <p>{count}</p>
//             <button onClick={this.handlerClick}>递增</button>
//         </>
//     }
// }
export default App;
