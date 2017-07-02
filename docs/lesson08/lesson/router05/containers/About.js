import React, { Component } from "react";
import { Link } from "react-router"

class About extends Component{
    render(){
        return (
            <div className="about">
                <h1> 关于我们 About Us </h1>
                {/*<ul className="list">
                    <li><Link to="/"> 返回首页</Link></li>
                </ul>*/}
            </div>

        )
    }
}
export default About;
