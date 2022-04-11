import { Component } from "react";
import "./index.css";
import data from "./data";
import Menu from "./menu";
class App extends Component {
  render() {
    return (
      <div className="friend-list">
        {Object.keys(data).map(item=>{
          return <Menu key={item} data={data[item]} />
        })}
      </div>)
  }
}

export default App;
