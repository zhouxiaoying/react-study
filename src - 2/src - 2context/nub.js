import { Component } from "react";
import { Consumer } from "./context";

class Nub extends Component {
    render(){
        return <Consumer>
            {function({nub,addNub}){
                return <>
                    <p>nub: {nub}</p>
                    <button onClick={addNub}>nub递增</button>
                </>
            }}
        </Consumer>
    }
}

export default Nub;
