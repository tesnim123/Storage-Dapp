"use client";

import { useState } from "react";
import { useActiveAccount, ConnectButton } from "thirdweb/react";
import { client } from "./client";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { getContract, readContract, prepareContractCall, sendTransaction, defineChain } from "thirdweb";

export default function Home() {
  const account = useActiveAccount();

  const [storedValue, setStoredValue] = useState<bigint | null>(null);
  const [newValue, setNewValue] = useState<string>("");

  const contractAddress = "0xf363C8abE2df980ef54aD4Ca51346057dD3cb1c8";

  const contract = getContract({
    client,
    chain: defineChain(11155111),
    address: contractAddress,
  });

  async function getValue() {
    const value = await readContract({
      contract,
      method: "function retrieve() view returns (uint256)",
      params: [],
    });
    setStoredValue(value as bigint);
  }

  async function setValueOnChain() {
    if (!account) return alert("Connect wallet first");
    if (!newValue) return;

    const tx = prepareContractCall({
      contract,
      method: "function store(uint256 num)",
      params: [BigInt(newValue)],
    });

    await sendTransaction({ account, transaction: tx });
    setNewValue("");
    getValue();
  }

  const wallets = [
    inAppWallet(),
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        fontFamily: "Poppins, sans-serif",
        color: "#fff",
        padding: 20,
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          backdropFilter: "blur(10px)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "20px", fontSize: "28px" }}>🌐 Storage DApp</h1>

        <ConnectButton client={client} wallets={wallets} />

        {!account ? (
          <p style={{ marginTop: "20px" }}>Please connect your wallet to start.</p>
        ) : (
          <>
            <h2 style={{ margin: "30px 0 15px" }}>Storage Contract</h2>

            <button
              onClick={getValue}
              style={{
                background: "linear-gradient(135deg, #f6d365, #fda085)",
                border: "none",
                padding: "10px 20px",
                borderRadius: "12px",
                cursor: "pointer",
                fontWeight: "bold",
                marginBottom: "15px",
                color: "#333",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                transition: "transform 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Get Stored Value
            </button>

            <p style={{ fontSize: "22px", marginBottom: "20px" }}>
              Stored Value: {storedValue !== null ? storedValue.toString() : "?"}
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
              <input
                type="number"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                placeholder="Enter number"
                style={{
                  padding: "10px 15px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.3)",
                  background: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  width: "150px",
                  textAlign: "center",
                  outline: "none",
                  fontWeight: "500",
                  backdropFilter: "blur(5px)",
                }}
              />

              <button
                onClick={setValueOnChain}
                style={{
                  background: "linear-gradient(135deg, #43e97b, #38f9d7)",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "#333",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  transition: "transform 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                Store
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
