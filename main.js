// 入口文件 main：index.js 改成main.js

// 安装webpack  安装webpack cli
import {createElement} from './toy-react.js'
import {Component} from './toy-react.js'
import {render} from './toy-react.js'

class Square extends Component {
     render() {
       return (<button className="square" onClick="{this.props.onClick">{this.props.value}</button>)
     }
}
  
 
  
class Board extends Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [
          {
            squares: Array(9).fill(null)
          }
        ],
        stepNumber: 0,
        xIsNext: true
      };
    }
  
    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        history: history.concat([
          {
            squares: squares
          }
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
    }
  
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });
    }
  
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
  
      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });
  
      let status;
      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }
  
      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  render(<Game />, document.getElementById("root"));
  // let game = <Game/>
  // console.log(game.vdom)
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
    
// class MyComponent extends Component{
//     constructor() {
//         super()
//         this.state = {
//             a:1, 
//             b:2,
//         }
    
//     }
    
//     render() {
//         return <div>
//             <h1>my component</h1>
//             {/* {this.children} */}
//             <button onClick={()=>{this.setState({a: this.state.a+1}) }}>add</button>
//             {this.state.a.toString()}
//             {this.state.b.toString()}
//             </div>
//     }
// }
// render(<MyComponent id="a" class="c">
//     <div>abc</div>
//     <div></div>
//     <div></div>
// </MyComponent>, document.body)



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
  