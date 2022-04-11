import { Component } from 'react'
class SetState extends Component {
    state={
       count: 1
    }
    addCount = ()=>{
    //   this.setState({
    //     count: this.state.count + 1
    //   });
    //   console.log(this.state.count);//
    //   this.setState({
    //     count: this.state.count + 1
    //   });
    //   console.log(this.state.count);//
    //   this.setState({
    //     count: this.state.count + 1
    //   });
    //   console.log(this.state.count);//
    //   this.setState({
    //     count: this.state.count + 5
    //   });
    //   console.log(this.state.count);//
    this.setState((state) => {
        // 重要：在更新的时候读取 `state`，而不是 `this.state`。
        console.log((state.count).toString())
        return { count: state.count + 1 }
    });
    // console.log(this.state.count)
    this.setState((state) => {
        // 重要：在更新的时候读取 `state`，而不是 `this.state`。
        console.log((state.count).toString())
        return { count: state.count + 1 }
    });
    // console.log(this.state.count)
    this.setState((state) => {
        // 重要：在更新的时候读取 `state`，而不是 `this.state`。
        console.log((state.count).toString())
        return { count: state.count + 1 }
    });
    // console.log(this.state.count)
    }
    render() {
      console.log("render123");
      const {count} = this.state;
      return (
        <div>
            <p>测试setstate批处理</p>
            <p>https://blog.csdn.net/fesfsefgs/article/details/108036605</p>
            <p>{count}</p>
            <button onClick={this.addCount}>递增</button>
            <p>react内部为了优化setState()的批处理，会对setState()进行合并，并且对相同属性的设置只保留最后一次的设置</p>
            <p>由React控制的事件处理函数，以及生命周期函数调用setState时表现为异步 。大部分开发中用到的都是React封装的事件，
            比如onChange、onClick、onTouchMove等（合成事件中），这些事件处理函数中的setState都是异步处理的。</p>
            <p>在setState中传一个函数，能拿到上次setState执行完后的结果，但是不妨碍是异步更新的，可以看到打印的是0，这是react给我们提供的方便之处</p>
            <button onClick={()=>{
                setTimeout(()=>{
                  this.addCount();
                })
            }}>递增2</button>
            <p>React控制之外的事件中调用setState是同步更新的。比如原生js绑定的事件，setTimeout/setInterval，ajax，promise.then内等 
            React 无法掌控的 APIs情况下，setState是同步更新state的</p>
        </div>
      )
    }
  }
  
  export default SetState;