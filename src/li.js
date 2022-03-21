import { Component } from "react";
class Li extends Component{
    render(){
        const { data } = this.props
        return <li>
            {data.title}
            <button>删除</button>
        </li>
    }
}
export default Li