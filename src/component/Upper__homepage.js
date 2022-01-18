import React, { Component } from 'react'
import './Upper__homepage.css'
import { Link } from 'react-router-dom'

export class Upper__homepage extends Component {
    render() {
        return (
            <div>
                <div id='upper__home'>
                    <div className='upper__homepage'>
                        <h1 className='upper__heading' >Marketplace</h1>
                    </div>


                    <div className='middle__homepage'>
                        <Link className='middle__heading' to='/nft'>NFTS</Link>
                        <Link className='middle__heading' to='/collections'>Collections</Link>
                    </div>


                    {/* 

                    <div className='lower__homepage'>
                        <div id='filters'>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" placeholder='All'
                                    style={{ width: "200%", backgroundColor: "white", color: "black", border: "1px solid #ddd" }}
                                >
                                    Sale type

                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false"
                                    style={{ width: "80%", backgroundColor: "white", color: "black", border: "1px solid #ddd" }}>
                                    Price range
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false"
                                style={{ width: "100%", backgroundColor: "white", color: "black", border: "1px solid #ddd" }}
                            >
                                Sort by
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>

                    </div> */}

                </div>
            </div >
        )
    }
}

export default Upper__homepage
