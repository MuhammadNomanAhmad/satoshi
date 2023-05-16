import React from "react";
import "./NftBuyShow.css";
import pinkPlane from "../../../assets/lightPinkPlane.png";

const NftBuyShow = () => {
  return (
    <div className="bgNftBuyClr ">
      <div className="bgNftBuyImg py-4">
        <div className="container">
          <div className="row min-vh-100 justify-content-center align-items-center">
            <div className="col-8 col-md-6 col-lg-4 nft-buy-show-card  px-3 pb-3  ">
              <div className="d-flex justify-content-end  py-2">
                <button
                  type="button"
                  className="btn-close nft-buy-btnClose"
                  aria-label="Close"
                ></button>
              </div>
              <div className="px-sm-2 px-lg-5 pb-5">
                <h4 className="text-center fw-bold pb-2 mb-0">
                  CONGRATULATIONS
                </h4>
                <p className="text-center">You got a Plane NFT Card</p>
                <div className="  ">
                  <img src={pinkPlane} className=" img-fluid" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftBuyShow;
