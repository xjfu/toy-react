// 入口文件 main：index.js 改成main.js

// 安装webpack  安装webpack cli
import {createElement} from './toy-react.js'
import {Component} from './toy-react.js'
import {render} from './toy-react.js'

class MyComponent extends Component{
    
    
    render() {
        return <div>
            <h1>my component</h1>
            {this.children}
            </div>
    }
}
render(<MyComponent id="a" class="c">
    <div>abc</div>
    <div></div>
    <div></div>
</MyComponent>, document.body)



// window.a = <div id="a" class="c">
//     <div>abc</div>
//     <div></div>
//     <div></div>
//     </div> 

// 使用jsx语法
// document.body.appendChild(<div id="a" class="c">
// <div>abc</div>
// <div></div>
// <div></div>
// </div>)
// var a = createElement("div", {
//     id: "a",
//     "class": "c"
//   }, createElement("div", null), createElement("div", null), createElement("div", null)); // var a = createElement("div", {
    
// var a = createElement("div", {
//     id: "a",
//     "class": "c"
// }, createElement("div", null), createElement("div", null), createElement("div", null)); 
// 变成 不带引号 为对象或者class
// window.a = createElement(MyComponent, {
//     id: "a",
//     "class": "c"
//   }, createElement("div", null, "abc"), createElement("div", null), createElement("div", null));
  