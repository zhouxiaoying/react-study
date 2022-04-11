import { Component } from "react";
import Menu from "./menu";
import "./style.css";
import data from "./data";
/*
    1. 构建静态视图
    2. 拆分组件
    3. 将数据和视图进行关联
    4. 交互实现
*/
/*
将数据从父组件传递给子组件 - props：
    父组件调用子组件时，将要传递的数据放在 子组件的属性中
    在子级中通过 props 来接收父组件传递的数据
*/
class App extends Component {
    render() {
        return <ul id="menu">
            {Object.keys(data).map((item,index)=>{
                return <Menu 
                    key={index}
                    title={item}
                    list = {data[item]}
                 />
            })}
        </ul>
    }
}
export default App;
