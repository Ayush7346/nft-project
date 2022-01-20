import React from 'react'

function CreateNFT() {
    return (
        <div>
            <h1 style={{ textAlign: "center", marginTop: "3%", font: "normal normal bold 32px/48px Poppins" }}>Create NFT</h1>

            <div class="row" style={{ justifyContent: "center", marginTop: "2%" }}>


                <div class="col-md-2 col-sm-2 col-10" style={{ marginTop: "15px" }}>
                    <div class="card"
                        style={{ border: "1px solid #C8C8C8", borderRadius: "13px" }}
                    >
                        <img
                            style={{ transform: "scale(0.5)" }}
                            src={require('../asset/images/single.png')} alt='' />
                        <div class="card-body">

                        </div>
                    </div>
                    <h6 style={{ textAlign: "center", marginTop: "28px", font: "normal normal 600 18px/27px Poppins" }} >Single</h6>
                </div>


                <div class="col-md-2 col-sm-2 col-10" style={{ marginTop: "15px" }}>
                    <div class="card"
                        style={{ border: "1px solid #C8C8C8", borderRadius: "13px" }}
                    >
                        <img
                            style={{ transform: "scale(0.5)" }}
                            src={require('../asset/images/collection.png')} alt='' />
                        <div class="card-body" >

                        </div>
                    </div>
                    <h6 style={{ textAlign: "center", marginTop: "28px", font: "normal normal 600 18px/27px Poppins" }}>Collection</h6>
                </div>
            </div>


        </div>
    )
}

export default CreateNFT
