import React from "react";
import "./MyNft.css";
import pinkPlane from "../../assets/pinkPlane.png";
import NftTransferModel from "../../Model/NftTransferModel";

const MyNFT = ({ myNftCardData, connect, address }) => {
  return (
    <div className="bg-mynft-color  pt-5 ">
      <div className="bgNftImg">
        <div className="container py-5 relative ">
          <div className="row justify-content-center align-items-center  ">
            <div className="col-10 col-lg-11 bg-mynft-box">
              <div className="row justify-content-sm-center justify-content-md-start">
                <div className="d-flex justify-content-end p-3"></div>

                <h3 className="text-center fw-bold">MY NFT</h3>
                {myNftCardData.map((currElement) => {
                  const { id, image, description, title } = currElement;
                  return (
                    <div
                      className="col-12 col-md-6 col-lg-4 gx-5 gy-3 "
                      key={id}
                    >
                      <div className="card">
                        <img
                          src={image}
                          className="card-img-top img-fluid"
                          alt="..."
                        />
                        <div className="card-body d-flex justify-content-between ">
                          <div className="">
                            <h5 className="card-title fw-bold">{title}</h5>
                            <p className="card-text fw-bold">{description}</p>
                          </div>
                          <div className="">
                            <a
                              href="#"
                              class="btn nft-transfer-btn fw-bold"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModale"
                            >
                              Transfer
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="pt-3 d-flex justify-content-center">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li class="page-item ">
                        <a
                          className="page-link pg-previous"
                          href="#"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          ...
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          10
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link pg-previous"
                          href="#"
                          aria-label="Next"
                        >
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NftTransferModel
      // address={walletAddress}
      // walletAddress={address}
      // connect={connected}
      // renderWalletAddress={renderWalletAddress}
      />
    </div>
  );
};

export default MyNFT;
