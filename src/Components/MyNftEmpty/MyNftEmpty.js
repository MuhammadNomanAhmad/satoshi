import React from "react";
import "./MyNftEmpty.css";
import boxImg from "../../assets/box.png";

const MyNftEmpty = () => {
  return (
    <div>
      <div className="bg-mynft-color  pt-5 ">
        <div className="bgNftImg">
          <div className="container py-5  ">
            <div className="row justify-content-center align-items-center  ">
              <div className="col-10 col-lg-11 bg-mynft-box">
                <div className="row py-5 ">
                  <h3 className="text-center fw-bold ">MY NFT</h3>
                  <div className="py-5">
                    <div className="col-3 mx-auto py-3 ">
                      <img src={boxImg} className="img-fluid" alt="" />
                    </div>
                    <p className="text-center">There is no Item</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNftEmpty;
