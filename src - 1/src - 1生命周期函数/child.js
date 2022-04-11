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
    
    - static getDerivedStateFromProps(nextProps, nextState)
    - shouldComponentUpdate()  -- 判断是否更新
    - render()
    - getSnapshotBeforeUpdate() -- 获取更新前的DOM快照 必须配合 didupdate 一块使用
    - componentDidUpdate() -- 处理副作用(请求)    


卸载阶段(unMount): 组件从 DOM 中删除
    - componentWillUnmount

*/

class Child extends Component {
    state={
        count: 1 
     }
     setSize=()=>{
        let sizeP = document.querySelector("#size");
        sizeP.innerHTML = window.innerWidth;
     }
     componentDidMount(){
        this.setSize();
        window.onresize = this.setSize;
     }
     componentWillUnmount(){
         console.log("组件即将卸载");
         window.onresize = null;
     }
    render(){
        const {parentInfo,count} = this.state;
        return <>
            <p id="info">{parentInfo} --- {count}</p>
            <p id="size">00</p>
            <button onClick={()=>{
                this.setState({
                    count: count + 1
                })
            }}>递增Count</button>
            <hr/>
        </>
    }
}

export default Child;
