import './App.css';
import data from './data'
import Menu from './menu'
import Input from './input'

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
        <Input></Input>
    </div>
  );
}

export default App;
