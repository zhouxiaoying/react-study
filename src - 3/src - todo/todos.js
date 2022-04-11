/*
    函数组件：就是一个正常的函数
    function 组件名(props){
        return 要构建的虚拟DOM
    }
    注意：函数组件中，没有this（this 为 undefined）,在 React 16.7 之前 函数组件中，
    没有生命周期和state，所以又被称之为 纯渲染组件或无状态组件
*/
import Todo from "./todo";

/*
    在 React 中，组件更新时，会生成新的虚拟DOM，然后对比新旧虚拟DOM，找到差异点，来精准更新真实DOM

    key 的作用，给节点添加一个该列表唯一的标识
    a, b, c, d
    c, b, e, d

    key 的取值问题:
    1. key 要在列表中，保持唯一
    2. 更新前后 key 值，要保持不变
*/
/*
    createElement(Todos,props:{
        key:item.id,
        ...props,
        data:item
    })
*/


function Todos({data,...props}){
    //console.log(props);
    return  <ul id="todo-list">
        {data.map(item=><Todo 
            key={item.id}
            {...props}
            data={item} 
        />)}
  </ul>
}


export default Todos;
