import { Component } from "react";

class Menu extends Component{
    state = {
        show:false
    }
    changeShow = ()=>{
        const { show } = this.state
        this.setState({
            show:!show
        })
    }
   
    render(){
        const { list, title} = this.props
        const { show } = this.state
        return <li className={show?'subList-show':''}>
            <a onClick={this.changeShow}>{title}</a>
            <ul className="subList">
            {
                list.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })
            }
            </ul>
        </li>
    }
}
export default Menu