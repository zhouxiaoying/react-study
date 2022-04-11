import { Component } from "react";
/*
    组件间通信：
        1. 父级向子级通信: 
            把数据添加子组件的属性中，然后子组件中从props属性中，获取父级传递过来的数据
        2. 子级向父级进行通信：
            在 React 数据永远只能自上向下进行传递,如果子级想要向父级进行通信，需要在父级中定义相关的回调方法，然后将回调方法传递给子级，子级调用父级的回调，来向父级进行通信。
*/
class Menu extends Component {
    state={
        open: false
    }
    render() {
        const {data} = this.props;
        const {title,list} = data;
        const {open} = this.state;
        return (
            <dl className={`friend-group ${open?"expanded":""}`}>
                <dt onClick={()=>{
                    this.setState({
                        open:!open
                    })
                }}>{title}</dt>
                {
                    list.map((item,index)=><dd key={index}>{item.name}</dd>)
                }
            </dl>
        )
    }
}

export default Menu;
