import React from "react";
import Link from "next/link";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark"style={{backgroundColor:"black"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#"> <img src="./images/Mohammed Sahad.png" alt=""width="150" height="150" draggable="false"  className="d-inline-block align-text-top img-fluid"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link href="#"><a className="nav-link active" aria-current="page" >Portfolio</a></Link>
                    </li>
                    <li className="nav-item">
                    <Link href="#"><a className="nav-link " aria-current="page" >Projects</a></Link>
                    </li>
                   
                </ul>
                </div>
            </div>
            </nav>

           
        </>
    )
};

export default Navbar;