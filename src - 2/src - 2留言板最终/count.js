import { Component } from "react";
import context from "./context";

/*
    1. 将 Provider 对应的 context 对象，绑定在类的 contextType 属性中。组件在实例化时，就会查找类的contextType属性。并将对应的 context 中接收到数据，放入 实例的 context 属性中 。
*/

class Count extends Component {
    //static contextType = context;
    render(){
        const {count,addCount} = this.context;
        return <div>
            <p>count: {count}</p>
            <button onClick={addCount}>递增</button>
        </div>
    }
}
Count.contextType = context;

export default Count;
