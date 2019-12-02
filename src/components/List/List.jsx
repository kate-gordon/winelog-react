import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Demo from '../Demo'; 
import About from '../About'; 

const List = () => {
    const ListStyle = {
        listStyleType: 'none', 
        display: 'flex', 
        justifyContent: 'flex-end', 
        margin: '3rem',  
    }
    const StyledLi = {
        padding: '20px'
    }
    return (
        <Router>
            <div> 
                <ul style={ListStyle}>
                    <li style={StyledLi}><Link to="/">Home</Link></li>
                    <li style={StyledLi}><Link to="/about">About Us</Link></li>
                    <li style={StyledLi}><Link to="/demo">Demo</Link></li>
                </ul> 
            </div>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/demo">
                    <Demo />
                </Route>
                {/* <Route path="/">
                    <Home />
                </Route> */}
            </Switch>
        </Router>
    )
}


export default List; 