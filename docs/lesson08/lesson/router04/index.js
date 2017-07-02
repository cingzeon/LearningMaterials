import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { Router, Route, hashHistory } from "react-router";

import App from './containers/App';
import Contact from "./containers/Contact";
/**
 *
 * @type {XML}
 *
 *  <Route path="/" component={ App }></Route>
 *         访问的路径 对应 组件对应的App
 *
 *  <Route path="/contact" component={ Contact }/>对应的组件
 *         访问/contact  对应 Contact
 */
const router = (
    <Router history={ hashHistory }>
        <Route path="/" component={ App } />
        <Route path="/contact" component={ Contact }/>
    </Router>
)
/*
  1. 每一个路由,单条的 Route 对应的 path, 而path需要展现的对应的component={"这里直接设置指定访问的组件"}
 */
render(router, document.getElementById('app'))
