import { Component } from "react";
/*
生命周期:

挂载阶段(mount): 从组件初始化 --> 组件构建的视图已经渲染到DOM树中
- constructor 初始化组件
- static getDerivedStateFromProps(props) 将 props 中的内容关联到 state 中 
    - 注意 this 问题
- render 构建虚拟DOM
- componentDidMount 组件完成挂载
    -- 处理副作用(DOM 操作，数据请求)

更新阶段(update): 从组件开始更新 --> 组件将对应的 DOM 视图更新完成

    组件更新：
        1. 调用 setState 会进行组件更新
        2. 在 React 父组件更新会引起子组件进行更新
    
    - static getDerivedStateFromProps(props, state)
    - shouldComponentUpdate()  -- 判断是否更新
    - render()
    - getSnapshotBeforeUpdate() 
    - componentDidUpdate() -- 处理副作用(请求)    


卸载阶段(unMount): 组件从 DOM 中删除


*/

class Child extends Component {
    constructor(props){
        super(props);
        console.log(1,"初始化组件");
        this.state={
           count: 1 
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log(2,"将 props 中的数据映射到 state 中");
        return props; // 返回值，是根据 props 要映射到 state 中的数据
    }
    componentDidMount(){
        console.log(4,"组件挂载完成");
    }
    render(){
        console.log(3,"构建虚拟DOM");
        const {parentInfo,count} = this.state;
        return <>
            <p>{parentInfo} --- {count}</p>
        </>
    }
}

export default Child;
