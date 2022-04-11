import ReactDOM from "react-dom";
/*
列表渲染: 根据内容，映射出来数组，将数组插入到 jsx 中
** 使用 列表渲染时，必须给每一项加 key 值
*/

const data = [
  "列表-1",
  "列表-2",
  "列表-3",
  "列表-4"
];
// const list = [
//   <li>列表-1</li>,
//   <li>列表-2</li>
// ];
const main = <ul>
    {data.map((item,index)=>{
      return <li key={index}>{item}</li>
    })}
</ul>;

ReactDOM.render(
  main,
  document.querySelector("#root")
);
