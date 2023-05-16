import "./App.css";
import MyNftEmpty from "./Components/MyNftEmpty/MyNftEmpty";
import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home";
import MyNFT from "./Components/MyNFT/MyNFT";
import { myNftCardData } from "./Components/MyNFT/MyNftData";

import NftTransfer from "./Components/MyNFT/NftTransfer/NftTransfer";
import NftSucceesTransfer from "./Components/MyNFT/NftSuccefullTransferShow/NftSucceesTransfer";
import NftBuyShow from "./Components/Home/NftBuyShow/NftBuyShow";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState } from "react";

import Web3 from "web3";
import NftTransferModel from "./Model/NftTransferModel";

function App() {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    try {
      await window.ethereum.enable();

      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();

      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderWalletAddress = () => {
    if (!walletAddress) {
      return null;
    }

    const stringsAdress =
      walletAddress.slice(0, 7) + "....." + walletAddress.slice(-7);
    return <div>{stringsAdress}</div>;
  };
  return (
    <>
      <BrowserRouter>
        <Header
          address={walletAddress}
          connect={connectWallet}
          renderWalletAddress={renderWalletAddress}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                address={walletAddress}
                connect={connectWallet}
                renderWalletAddress={renderWalletAddress}
              />
            }
          />

          <Route
            exact
            path="/myNft"
            element={
              walletAddress ? (
                <MyNFT myNftCardData={myNftCardData} connect={connectWallet} />
              ) : (
                <MyNftEmpty />
              )
            }
          />
        </Routes>
        <NftTransferModel
          address={walletAddress}
          connect={connectWallet}
          renderWalletAddress={renderWalletAddress}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
