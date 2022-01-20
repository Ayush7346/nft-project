import React from 'react';

function singleNFT() {
    return (

        <div>

            <h1 style={{ textAlign: "center", fontWeight: "bolder", fontSize: "32px", marginTop: "2%" }}> Create NFT</h1>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "2%" }} >

                <div class="col-sm-6 col-md-3 col-10 my-3" >
                    <h6
                        style={{ marginBottom: "15px" }}
                    >Upload File*</h6>

                    <div class="card" style={{ borderRadius: "13px", border: "1px solid #c8c8c8" }}>


                        <img src={require('../asset/images/Browse.png')}
                            style={{}}
                        />
                        <h6
                            style={{ textAlign: "center" }}
                        >Drag and Drop or <span>Browse</span></h6>

                    </div>
                    <h6
                        style={{ fontSize: "14px", color: "#828282", marginTop: "15px", marginLeft: "5px" }}
                    >Supported(JPG, PNG, GIF, SVG, MP4, WEBM, WAV) <br /> Max size: 40 mb</h6>
                </div>

                {/* form */}

                <form action="/" method="post" style={{ marginTop: "10px" }}>

                    {/* Name */}

                    <div className="form-group">
                        <label for="exampleInputEmail1">Name*</label>

                        <input type="email" className="form-control" id="exampleInputEmail1" />
                    </div>

                    {/* Description */}

                    <div className="form-group">
                        <label for="exampleInputEmail1">Description</label>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                        <p>0 to 1000 character used</p>
                    </div>

                    {/* Collection */}

                    <div className="form-group">
                        <label for="exampleInputPassword1">Collection</label>
                        <div class="input-group">
                            <input type="text" class="form-control" aria-label="Text input with dropdown button" />
                            <div class="input-group-append">
                                <button class="btn  dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Action</a>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Block chain */}
                    <div className="form-group">
                        <label for="exampleInputEmail1">Block chain</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Ethereum' />
                    </div>

                    {/* Button */}

                    <button type="button" class="btn btn-primary btn-lg btn-block"
                        style={{ width: "90%" }}
                    >Create</button>
                </form>
            </div>
        </div>

    )
}

export default singleNFT;
