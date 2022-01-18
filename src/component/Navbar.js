import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div >

            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <div className="container-fluid" style={{ backgroundColor: "white" }}>
                    <a className="navbar-brand" href="#"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/NFT_Icon.png/480px-NFT_Icon.png' style={{ width: "40px" }} /></a>
                    <form className="d-flex p-0 m-0 " style={{ width: "90%" }}>
                        <input className="form-control " type="search" placeholder="Search" aria-label="Search" style={{ backgroundColor: "#f8f8f8", width: "65%", height: "35px", border: "0" }} />
                        <button style={{ border: "0", width: "35px", height: "35px", backgroundColor: "#f8f8f8", marginLeft: "5px" }}> <i className="fa fa-search" aria-hidden="true" ></i></button>

                    </form>



                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link className="nav-link active" aria-current="page" to="/MarketPlace" style={{ fontSize: "16px", fontWeight: "600" }}>Marketplace</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" exact to="/LeaderBoard" style={{ fontSize: "16px" }}>Leaderboard</Link>

                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: "16px" }}>
                                    Resource
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/HelpCenter">Help Center</Link></li>
                                    <li><a className="dropdown-item" href="#">Suggestions</a></li>


                                </ul>
                            </li>


                            <li>
                                <button type="button" className="btn btn-primary" style={{ padding: "5px 30px 5px 30px" }}>Create</button>

                            </li>
                            <li style={{ lineHeight: "35px", color: "gray" }}>
                                |
                            </li>
                            <li>

                                <i className="fas fa-bell" style={{ marginTop: "12px", color: "gray", cursor: "pointer" }}></i>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-user"></i>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">My Items</a></li>


                                </ul>
                            </li>
                            <li>

                                <i className="fas fa-wallet" style={{ marginTop: "12px", color: "gray", cursor: "pointer" }}></i>
                            </li>


                        </ul>

                    </div>
                </div>

            </nav >
        </div >
    )
}

export default Navbar
