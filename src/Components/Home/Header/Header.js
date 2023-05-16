import React from "react";
import "./Header.css";
import companyLogo from "../../../assets/logo.png";
// import { loadWeb3 } from "../Web3/Api";
import { Link } from "react-router-dom";

// const handleClickEvent = async () => {
//   let acc = await loadWeb3();
// };

const Header = ({ address, connect, renderWalletAddress }) => {
  const buttonTextChange = address ? renderWalletAddress() : "CONNECT WALLET ";
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container pb-3">
          <a className="navbar-brand" href="#">
            <img
              src={companyLogo}
              classNameName=""
              style={{ width: "146px" }}
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4 ">
              <li className="nav-item">
                <Link
                  className="nav-link navbar-links "
                  aria-current="page"
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navbar-links" to="/myNft">
                  MY NFT
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link navbar-links dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link navbar-links disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <div class="d-flex">
              <button
                className="px-3 py-1 text-uppercase connectWalletBtn py-2  fw-bold "
                onClick={connect}
              >
                {buttonTextChange}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
