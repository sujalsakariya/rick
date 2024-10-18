import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import './Head.css';
import { Link } from "react-router-dom";
const Head = () => {
    return (
        <Navbar>
            <div className="nav">
                <Navbar.Brand>
                    <Link to='/'>
                        <img src="https://i5.walmartimages.com/seo/Rick-and-Morty-Metal-Wall-Art_bcc4085e-c311-4886-a7a4-aa58127883d7.5958f8a36f96aa4c08dbc4a8a580e57c.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF" alt="" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <p className='hovv'>Docs</p>
                        <p className='hovv'>About</p>
                        <button><Link to='/support'>SUPPORT US</Link></button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default Head