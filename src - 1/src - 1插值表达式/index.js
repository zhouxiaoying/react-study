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
    


表达式：
  会产生值得一个代码组合
  - 变量
  - 运算
  - 函数调用
  
 if/for/while 是语句，并不是表达式
*/
const title = <h2>这是插值</h2>;
const main = <main>
     <header id="header">
        <h1>hello <br/> react</h1>
        <hr />
        <p>第一节 React 课程</p>
        {title}
     </header>   
</main>;

ReactDOM.render(
  main,
  document.querySelector("#root")
);
