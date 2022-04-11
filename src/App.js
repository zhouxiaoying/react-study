import './App.css';
import data from './data'
import Menu from './menu'
import Input from './input'

import SetState from './setState'; //测试setstate的同一操作下   批量更新

import LifeCircle from './liftcircle'; // 测试生命周期

const data5 = function(){
  console.log(111);
  return "123"
}
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


function App() {
  return (
    <div className="App">
    <p>{data1}</p>
    <p>{data2}</p>
    <p>{data3}</p>
    <p>{data4(25)}</p>
    <p>{data5()}</p>
      <ul id="menu">
            {Object.keys(data).map((item,index)=>{
                return <Menu 
                    key={index}
                    title={item}
                    list = {data[item]}
                 />
            })}
        </ul>
        <h1>测试受控组件</h1>
        <Input></Input>
        <h1>测试setstate</h1>
        <SetState></SetState>
        <h1>测试生命周期</h1>
        <LifeCircle parentInfo={"父级传递的信息123"}></LifeCircle>
    </div>
  );
}

export default App;
