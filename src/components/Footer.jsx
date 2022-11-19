import React from 'react';
import {  Layout, Typography } from 'antd';

const { Footer } = Layout;

export default function Foot(){
    return(
        <Footer style={{ textAlign: 'center', backgroundColor: "gray", border: "none" }} theme="dark">
            <Typography style={{ color: "white" }}>N-Moviez ©2022 </Typography>
        </Footer>

    )
}