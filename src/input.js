import { Component } from "react";
import Li from './li'

class Input extends Component{
    state = {
        data:[
            {id:'1',title:'标题1'},
            {id:'2',title:'标题2'},
        ],
        val:''
    }
    render(){
        const { data, val } = this.state
        return <>
            <ul>
            {
                data.map(item => <Li key={item.id} data={item}></Li>)
            }
            </ul>
            <input type='text' value={val} onChange={({target})=>{
                this.setState({
                    val:target.value
                })
            }}></input>
            <p>{val}</p>
            <button onClick={()=>{this.setState({
                data:[...data,{id:Date.now(),title:val}],
                val:''
            })}}>添加</button>
        </>
    }
}
export default Input