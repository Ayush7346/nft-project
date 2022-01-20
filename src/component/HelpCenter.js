import React from 'react'
import { Link } from 'react-router-dom'
function HelpCenter() {
    return (
        <div >
            <h1 style={{ font: "normal normal 600 22px/33px Poppins", marginTop: "50px", marginLeft: "50px" }}>Help center</h1>


            <div class="row">


                <div class="col-sm-6 col-lg-3 col-md-3 col-10 p-5">
                    <div class="card" style={{
                        cursor: "pointer", boxShadow: "0px 3px 12px #00000010", border: "1px solid #D5D5D5"
                        , borderRadius: "12px"
                    }}>

                        <div class="card-body">
                            <img src={require('../asset/images/fixed price.png')} alt=''
                                style={{ height: "50px", width: "50px", marginBottom: "10px" }}
                            />
                            <h5 class="card-title" style={{ font: "normal normal 600 16px/ 25px Poppins" }}>Buying</h5>
                            <p class="card-text"
                                style={{ font: "normal normal normal 14px/21px Poppins", color: "#191919" }}
                            >Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,<br />sed do eiusmod tempor</p>

                        </div>
                    </div>
                </div>


                {/* <div class="col-sm-6 col-lg-3 col-md-3 col-10 p-5 w-10">


                    <div className="card"
                        style={{
                            cursor: "pointer", boxShadow: "0px 3px 12px #00000010", border: "1px solid #D5D5D5"
                            , borderRadius: "12px"
                        }}

                    >

                        <div class="card-body" >
                            <img src={require('../asset/images/fixed price.png')} alt=''
                                style={{ height: "50px", width: "50px" }}
                            />
                            <Link to="/Buying" style={{ textDecoration: "none", color: "black" }}>
                                <h5 class="card-title" style={{ font: "normal normal 600 16px/ 25px Poppins" }}>Buying</h5>
                            </Link>

                            <p class="card-text"
                                style={{ font: "normal normal normal 14px/21px Poppins", color: "#191919" }}
                            >Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,<br /> sed do eiusmod tempor</p>

                        </div>
                    </div>


                </div> */}




                <div class="col-sm-6 col-lg-3 col-md-3 col-10 p-5" >
                    <div class="card" style={{
                        cursor: "pointer", boxShadow: "0px 3px 12px #00000010", border: "1px solid #D5D5D5"
                        , borderRadius: "12px"
                    }}>

                        <div class="card-body">
                            <img src={require('../asset/images/image.png')} alt=''
                                style={{ height: "50px", width: "50px", marginBottom: "10px" }}
                            />
                            <h5 class="card-title" style={{ font: "normal normal 600 16px/ 25px Poppins" }}>Selling</h5>
                            <p class="card-text"
                                style={{ font: "normal normal normal 14px/21px Poppins", color: "#191919" }}
                            >Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,<br />sed do eiusmod tempor</p>


                        </div>
                    </div>
                </div>





                <div class="col-sm-6 col-lg-3 col-md-3 col-10 p-5">
                    <div class="card" style={{
                        cursor: "pointer", boxShadow: "0px 3px 12px #00000010", border: "1px solid #D5D5D5"
                        , borderRadius: "12px"
                    }}>

                        <div class="card-body">
                            <img src={require('../asset/images/image.png')} alt=''
                                style={{ height: "50px", width: "50px", marginBottom: "10px" }}
                            />
                            <h5 class="card-title" style={{ font: "normal normal 600 16px/ 25px Poppins" }}>Creating Collection</h5>
                            <p class="card-text"
                                style={{ font: "normal normal normal 14px/21px Poppins", color: "#191919" }}
                            >Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,<br />sed do eiusmod tempor</p>


                        </div>
                    </div>
                </div>


                <div class="col-sm-6 col-lg-3 col-md-3 col-10 p-5">
                    <div class="card" style={{
                        cursor: "pointer", boxShadow: "0px 3px 12px #00000010", border: "1px solid #D5D5D5"
                        , borderRadius: "12px"
                    }}>

                        <div class="card-body">
                            <img src={require('../asset/images/image.png')} alt=''
                                style={{ height: "50px", width: "50px", marginBottom: "10px" }}
                            />
                            <h5 class="card-title" style={{ font: "normal normal 600 16px/ 25px Poppins" }}>Adding NFT's</h5>
                            <p class="card-text"
                                style={{ font: "normal normal normal 14px/21px Poppins", color: "#191919" }}
                            >Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,<br />sed do eiusmod tempor</p>


                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default HelpCenter
