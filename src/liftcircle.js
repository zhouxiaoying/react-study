import { Component } from "react";
class LifeCircle extends Component{
    constructor(props){
        super(props);
        console.log(1,"初始化组件");
        this.state={
           count: 1 
        }
        console.log(this.state);
    }
    static getDerivedStateFromProps(props,state){
        console.log(2,"将 props 中的数据映射到 state 中");
        console.log(2,props);
        return props; // 返回值，是根据 props 要映射到 state 中的数据
    }
    shouldComponentUpdate(nextProps,nextState){
        // console.log("props",this.props,nextProps);
        // console.log("state",this.state,nextState);
        console.log(2,"判断当前组件是否需要更新");
        return true; // true 继续完成当前组件更新，false 中断当前组件更新
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

export default LifeCircle