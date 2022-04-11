import { Component } from "react";
import context from "./context";

class Count extends Component {
    static contextType = context;
    render(){
        const {count,addCount} = this.context;
        return <div>
            <p>count: {count}</p>
            <button onClick={addCount}>递增</button>
        </div>
    }
}

export default Count;
