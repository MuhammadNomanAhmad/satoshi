import React from "react";
import "./NftTransfer.css";
import pinkPlane from "../../../assets/pinkPlane.png";
// import { loadWeb3 } from "../../Home/Web3/Api";

// const handleClickEvent = async () => {
//   let acc = await loadWeb3();
// };

const NftTransfer = ({ address, connect, renderWalletAddress }) => {
  const buttonText = address ? renderWalletAddress() : "CONNECT WALLET ";
  return (
    <div className="bgNftClr ">
      <div className="bgNftImg py-4">
        <div className="container">
          <div className="row min-vh-100 justify-content-center align-items-center">
            <div className="col-8 col-md-6 col-lg-3 nft-transfer-card  px-3 ">
              <div className="d-flex justify-content-end  py-2">
                <button
                  type="button"
                  className="btn-close nftTransfer-btnClose"
                  aria-label="Close"
                ></button>
              </div>
              <h5 className="text-center fw-bold pb-2"> NFT TRANSFER</h5>
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

              <div className="pt-3">
                <p className="fw-bold">To:</p>
                <input type="text" className="w-100 nft-Transfer-Input" />
                <button
                  className="px-3 fw-bold py-1 text-uppercase connectWalletBtn mb-3 fw-bold w-100 my-2 "
                  onClick={connect}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftTransfer;
