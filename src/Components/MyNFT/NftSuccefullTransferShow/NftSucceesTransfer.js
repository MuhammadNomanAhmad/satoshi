import React from "react";

import pinkPlane from "../../../assets/pinkPlane.png";

import { IoCheckmarkCircle } from "react-icons/io5";
import "./NftSucceesTransfer.css";

const NftSucceesTransfer = () => {
  return (
    <div>
      <div className="bgNftClr ">
        <div className="bgNftImg py-4">
          <div className="container">
            <div className="row min-vh-100 justify-content-center align-items-center">
              <div className="col-8 col-md-6 col-lg-4 nft-transfer-card   ">
                <div className="d-flex justify-content-end  py-2">
                  <button
                    type="button"
                    className="btn-close nftTransfer-btnClose "
                    aria-label="Close"
                  ></button>
                </div>
                <div className="px-sm-3 px-lg-5">
                  <h5 className="text-center fw-bold "> NFT TRANSFER</h5>
                  <div className="card nft-transfer-img-card">
                    <img
                      src={pinkPlane}
                      className="card-img-top img-fluid"
                      alt="..."
                    />
                    <div className="card-body d-flex nftTRansfer-card-body flex-column justify-content-between align-items-center">
                      <h6 className="card-text fw-bold pt-1">COMMON</h6>
                      <h6 className="card-title fw-bold">#0001</h6>
                    </div>
                  </div>

                  <div className="pt-1">
                    <p className="fw-bold mb-0">To:</p>
                    <input
                      type="text"
                      className="w-100 nft-Transfer-Input px-3"
                    />

                    <div className="d-flex flex-column  align-items-center justify-content-center ">
                      <button type="button" className=" checkIconBox mt-1">
                        <IoCheckmarkCircle className="checkIcon" />
                      </button>
                      <p className=" text-center mt-1 mb-2">
                        Card Successfully Transferred!
                      </p>
                    </div>
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

export default NftSucceesTransfer;
