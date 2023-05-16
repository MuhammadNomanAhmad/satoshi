import React from "react";
import pinkPlane from "../assets/lightPinkPlane.png";
const MyNftModel = ({ myNftCardData }) => {
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="bg-mynft-color  ">
              <div className="container py-5 ">
                <div className="row justify-content-center align-items-center  ">
                  <div className="col-10 col-lg-8 bg-mynft-box ">
                    <div className="row justify-content-sm-center justify-content-md-start">
                      <div className="d-flex justify-content-end p-3">
                        <button
                          type="button"
                          className="btn-close myNft-btnClose"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>

                      <h3 className="text-center fw-bold">MY NFT</h3>
                      {/* {myNftCardData.map((currElement) => {
                        const { id, image, description, title } = currElement;
                        return (
                          <div className="col-12  gx-5 gy-3 " key={id}>
                            <div className="card">
                              <img
                                src={image}
                                className="card-img-top img-fluid"
                                alt="..."
                              />
                              <div className="card-body d-flex justify-content-between ">
                                <div className="">
                                  <h5 className="card-title fw-bold">
                                    {title}
                                  </h5>
                                  <p className="card-text fw-bold">
                                    {description}
                                  </p>
                                </div>
                                <div className="">
                                  <a
                                    href="#"
                                    class="btn nft-transfer-btn fw-bold"
                                  >
                                    Transfer
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })} */}
                      <img src={pinkPlane} alt="" />

                      {/* <div className="pt-3 d-flex justify-content-center">
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
                      </div> */}
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

export default MyNftModel;
