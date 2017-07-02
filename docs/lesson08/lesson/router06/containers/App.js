import React, { Component } from "react";
import { Link } from "react-router";

// 使用 NavLink 组件
import NavLink from "./NavLink";

/**
 * 课时6 6.激活菜单样式
 *
 */
// 使用 activeStyle={{}}
/*class App extends Component{
  render(){
    return (
       <div className="app">
         <h1> Hello React Router~~~! </h1>
         <ul className="list">
            <li>
                <Link to="/" activeStyle={{color: "red"}}>首页</Link>
            </li>
            <li>
                <Link to="/contact" activeStyle={{color: "red", fontSize:"30px"}}> 联系我们 </Link>
            </li>
            <li>
                <Link to="/about" activeStyle={{color: "red",  fontSize:"30px"}}> 关于我们 </Link>
            </li>
         </ul>
         { console.log(this.props)}
         { this.props.children }
       </div>
    )
  }
}*/

// 使用 activeClassName=""
class App extends Component{
    render(){
        return (
            <div className="app">
                <h1> Hello React Router~~~! </h1>
                <ul className="list">
                    <li>
                        {/*<Link to="/" activeClassName="active">首页</Link>*/}
                        <NavLink url="/" linkName="首页"/>
                    </li>
                    <li>
                        {/*<Link to="/contact" activeClassName="active"> 联系我们 </Link>*/}
                        <NavLink url="/contact" linkName="联系我们"/>
                    </li>
                    <li>
                        {/*<Link to="/about" activeClassName="active"> 关于我们 </Link>*/}
                        <NavLink url="/about" linkName="关于我们"/>
                    </li>
                </ul>
                { this.props.children }
            </div>
        )
    }
}


export default App;
