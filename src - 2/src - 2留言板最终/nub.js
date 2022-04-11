import { Component } from "react";
import { Consumer } from "./context";
/*
    调用 Provider 对应的 Consumer。在 Consumer 插入一个函数，Consumer 会将 context 数据传递给该函数，并获取 该函数的返回值，将返回值构建为视图
*/
class Nub extends Component {
    render(){
        return <Consumer>
            {function({nub,addNub}){
                return <>
                    <p>nub: {nub}</p>
                    <button onClick={addNub}>nub递增</button>
                </>
            }}
        </Consumer>
    }
}

export default Nub;
