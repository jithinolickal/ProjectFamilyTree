import React from 'react';
import "./Components.css";
import "./NavStyle.css";
import { Link } from "react-router-dom";

const navStyle = {
    color : 'white',
    textDecoration: 'none',
    marginRight: 'auto',
}

class Nav extends React.Component{
    render(){
        return(
            <div className="headerDiv">
                <nav>
                    <Link style={navStyle} to={"/"} className="logoStyle">
                        <h3>Logo</h3>
                    </Link>
                    <ul className="nav-links">
                        <Link style={navStyle} to={"/"}><li>Home</li></Link>
                        <Link style={navStyle} to={"/FamilyTree"}><li>Family Tree</li></Link>
                        <Link style={navStyle} to={"/Gallery"}><li>Gallery</li></Link>
                        <Link style={navStyle} to={"/About"}><li>About</li></Link>
                    </ul>
                    <button className="btnStyle">Sign In</button>
                </nav>
            </div>
        );
    }
}
export default Nav;