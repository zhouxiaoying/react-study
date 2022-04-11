import { Component } from "react";
import Count from "./count";
import Nub from "./nub";

class Child extends Component {
    render(){
        return <>
            <Count />
            <Nub />
        </>
    }
}

export default Child;
