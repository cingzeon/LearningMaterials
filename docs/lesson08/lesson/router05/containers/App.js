import React, { Component } from "react";
import { Link } from "react-router";


class App extends Component{
  render(){
    return (
       <div className="app">
         <h1> Hello React Router~~~! </h1>
         <ul className="list">
            <li>
                <Link to="/">首页</Link>
            </li>
            <li>
                <Link to="/contact"> 联系我们 </Link>
            </li>
            <li>
                <Link to="/about"> 关于我们 </Link>
            </li>
         </ul>
         { console.log(this.props)}
         { this.props.children }
       </div>
    )
  }
}
export default App;
