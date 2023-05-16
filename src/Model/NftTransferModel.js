import React from "react";
import pinkPlane from "../assets/lightRedPlane.png";
const NftTransferModel = ({ walletAddress, connect, renderWalletAddress }) => {
  const buttonText = walletAddress ? renderWalletAddress() : "CONNECT WALLET";
  return (
    <div>
      <div>
        <div
          class="modal fade"
          id="exampleModale"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div className="bg-mynft-color  ">
                <div className="bgNftClr ">
                  <div className="bgNftImg">
                    <div className="container ">
                      <div className="row  justify-content-center align-items-center p-3">
                        <div className="col-8 col-md-8  nft-transfer-card   ">
                          <div className="d-flex justify-content-end  py-2">
                            <button
                              type="button"
                              className="btn-close nftTransfer-btnClose"
                              aria-label="Close"
                              data-bs-dismiss="modal"
                            ></button>
                          </div>
                          <div className="px-4">
                            <h5 className="text-center fw-bold pb-2">
                              NFT TRANSFER
                            </h5>
                            <div className="card nft-transfer-img-card">
                              <img
                                src={pinkPlane}
                                className="card-img-top img-fluid"
                                alt="..."
                              />
                              <div className="card-body d-flex nftTRansfer-card-body flex-column justify-content-between align-items-center">
                                <h6 className="card-text fw-bold pt-1">
                                  COMMON
                                </h6>
                                <h6 className="card-title fw-bold">#0001</h6>
                              </div>
                            </div>

                            <div className="pt-3">
                              <p className="fw-bold">To:</p>
                              <input
                                type="text"
                                className="w-100 nft-Transfer-Input"
                              />

                              <div>
                                <button
                                  className="px-3 py-1 text-uppercase connectWalletBtn w-100 mt-2 fw-bold "
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

export default NftTransferModel;
