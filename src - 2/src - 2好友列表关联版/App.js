import { Component } from "react";
import "./index.css";
import data from "./data";
import Menu from "./menu";
class App extends Component {
  state={
      openName:"" // 记录当前展开向 key 值
  }
  setOpen=(openName)=>{
    this.setState({
      openName
    })
  }
  render() {
    const {openName} = this.state;
    return (
      <div className="friend-list">
        {Object.keys(data).map(item=>{
          return <Menu 
            key={item} 
            name={item} 
            openName={openName} 
            data={data[item]} 
            setOpen={this.setOpen}
          />
        })}
      </div>)
  }
}

export default App;
