import ReactDOM from "react-dom";
/*
条件输出：
   1. ||、&&、:?
   2. 利用函数
*/

const data1 = false||"或运算";
const data2 = true&&"与运算";
const data3 = true?"为真":"为假";
const data4 = (nub)=>{
  if(nub<5){
    return "小于5";
  }
  if(nub<10){
    return "小于10";
  }
  if(nub<20){
    return "小于20"
  }
  return "大于等20";
}
const main = <div>
  {data1}
  {data2}
  {data3}
  {data4(25)}
</div>;

ReactDOM.render(
  main,
  document.querySelector("#root")
);
