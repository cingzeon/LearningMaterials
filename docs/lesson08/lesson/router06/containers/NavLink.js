/**
 * Created by CHENGJINLEUNG on 2017/7/3.
 */
import React, { Component } from "react";
import { Link } from "react-router";

import "./index.css";
// 封装 切换的路由
class NavLink extends Component{
    render(){
        return (
            <Link to={this.props.url} activeClassName="active">
                {this.props.linkName}
            </Link>
        )
    }
}
export default  NavLink;