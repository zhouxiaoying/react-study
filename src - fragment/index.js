import { Fragment } from "react";
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
  6. JSX 中属性的写法，不一定和HTML一致
    1. class ---> className
    2. 如果属性名由两个或两个以上单词组成，一般从第二个单词开始首字母大写
    3. 注意 style 的值，不是字符串，而是 对象 
  7. JSX 最终会变成虚拟DOM（一个对象）,一定要注意，JSX 在输出时，必须有且只有一个顶层容器元素。
    - Fragment:<Fragment></Fragment> 或 <></>
*/
const main = <>
  <main style={{
    width: 500,
    border: "1px solid #000"
  }}>
    <header id="header">
      <h1>hello <br /> react</h1>
      <hr />
      <p className="p">第一节 React 课程</p>
      <input type="text" autoFocus />
    </header>
  </main>
  <section>内容主体</section>
</>;

ReactDOM.render(
  main,
  document.querySelector("#root")
);
