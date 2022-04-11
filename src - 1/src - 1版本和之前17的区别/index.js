import ReactDOM from "react-dom";
/*
  React 17 和 之前版本 在使用时的差异：
    在 React 17 中新增了 JSX-runtime，可以直接将 JSX，转换成 虚拟DOM，所以在 React 17 中，如果模块中只使用到了 JSX 的话，可以不引入 React
*/
const main = <main>
     <header id="header">
        <h1>hello react</h1>
        <p>第一节 React 课程</p>
     </header>   
</main>;

ReactDOM.render(
  main,
  document.querySelector("#root")
);
