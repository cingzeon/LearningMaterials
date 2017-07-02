import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { Router, Route, hashHistory } from "react-router";

import App from './containers/App';
import Contact from "./containers/Contact";
import About from "./containers/About";

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
        <Route path="/" components={ App }>
        {/*路由的嵌套*/}
            <Route path="contact" components={ Contact }/>
            <Route path="about" components={ About }/>

        </Route>

    </Router>
)
/*
  1. 每一个路由,单条的 Route 对应的 path, 而path需要展现的对应的component={"这里直接设置指定访问的组件"}
  2. 分析路由的嵌套及对应的关系
     /          ->当我们去访问 / 它其实对应的就是 App 这个组件
     /contact   ->当我们去方问 /contact 这个路由的时，它其实对应的就是 App + Contact 这个组件
     /about     ->当我们去方问 /about 这个路由的时，它其实对应的就是 App + About 这个组件

  3. 当 Contact 和 About 传入给父级的 App的时候，别外一边如何去承载呢。
     这时我们就用要到 App 的里面使用 { this.props.chanldren } 通过这种方就可以把 主路由传过来的所有组件，如App.js
 */
render(router, document.getElementById('app'))
