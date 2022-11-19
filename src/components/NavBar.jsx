import React from 'react';
import { Link } from "react-router-dom";
import {  Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

const { Header } = Layout;

export default function NavBar() {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu theme="dark" mode="horizontal" style={{}}> 
        <Menu.Item ><Link to="/onshow"> Now Playing</Link> </Menu.Item>
        <Menu.Item><Link to="/upcoming">Coming Soon</Link> </Menu.Item>
      </Menu>
    </Header>
  );
}