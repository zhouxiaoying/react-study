import {createContext} from "react";

const context = createContext();
const {Provider,Consumer} = context;
export {Provider,Consumer};
export default context;

/*
    context 用于实现跨组件信息传递

    Provider：用于向包在 Provider 中子孙后代进行信息传递，在 Provider 的 value 属性中，定义想要传递的信息


    
*/
