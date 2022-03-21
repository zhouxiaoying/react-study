import ReactDOM from "react-dom";
/*
 JSX 注意事项:
  1. JSX 不是字符串
  2. JSX 不是 HTML，很多写法和HTML 有区别，另外有强制的大小写规则
  3. 标签名必须小写，组件名首字母要大写 
  4. 所有的标记必须闭合
  5. 在 JSX 中支持插值表达式
    - 在内容中做插值
    - 在属性中做插值
    1. 插值表达式中，可以接受一个js表达式
    2. 如果实在元素内容中做插值，运算值必须是 ReactNode
    

 ReactNode:
  基本类型：
    1. number、string 原样输出   
    2. null,undefined,boolean,symbol 会被忽略掉
  符合类型:
    1. 数组 将数组展开后依次输出
    2. React 构建的虚拟DOM (React child)
  注释 
   

*/
const data = "hello React";
const data2 = 10;
const data3 = true;
const data4 = ["a","b","c","d"];
const data5 = function(){
  console.log(111);
  return "123"
}
const h1 = <h1>Hello React</h1>
const main = <div>
  {data}
  {data2}
  {data3}
  {data4}
  {/* {data5} */}
  {/* 注释 */}
  {h1}
</div>;

ReactDOM.render(
  main,
  document.querySelector("#root")
);
