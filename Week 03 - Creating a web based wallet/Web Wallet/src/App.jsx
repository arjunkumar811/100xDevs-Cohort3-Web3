import { useState } from "react";
import "./App.css";
import { generateMnemonic } from "bip39";
import { SolanaWallet } from "./components/SolanaWallet";
import { EthWallet } from "./components/EthWallet";

function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Web3 Wallet</h1>

        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={async function () {
              const mn = await generateMnemonic();
              setMnemonic(mn);
            }}
            style={{
              padding: "10px 20px",
              marginRight: "10px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Create Seed Phrase
          </button>
        </div>

        {mnemonic && (
          <div style={{ marginBottom: "20px" }}>
            <h3>Your Seed Phrase:</h3>
            <input
              type="text"
              value={mnemonic}
              readOnly
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontFamily: "monospace",
              }}
            />
          </div>
        )}

        {mnemonic && (
          <div style={{ display: "flex", gap: "40px" }}>
            <div style={{ flex: 1 }}>
              <h3>Solana Wallets</h3>
              <SolanaWallet mnemonic={mnemonic} />
            </div>

            <div style={{ flex: 1 }}>
              <h3>Ethereum Wallets</h3>
              <EthWallet mnemonic={mnemonic} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
