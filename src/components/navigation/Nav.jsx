import { Menu } from 'antd';
import {Link} from 'react-router-dom';
import { useState } from 'react';



import "./Nav.css"
const Nav = (props) => {

  return (
    <div >
        <Menu mode="horizontal" defaultSelectedKeys={[props.active]} >
    <Menu.Item key="your" >
        <Link to="/your">
      Your
      </Link>
    </Menu.Item>
    <Menu.Item key="all" >
    <Link to="/">
      All
      </Link>
    </Menu.Item>
    <Menu.Item key="blocked" >
    <Link to="/blocked">
      Blocked
      </Link>
    </Menu.Item>
    </Menu>
    </div>
    
  )
}

export default Nav