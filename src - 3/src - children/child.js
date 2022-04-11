import { Component } from "react";

class Child extends Component {
    render(){
        console.log(this.props.children);
        return <div>
            <h1>Child</h1>
            {this.props.children}
        </div>
    }
}

export default Child;
