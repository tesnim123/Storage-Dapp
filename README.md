# 🌐 Storage DApp

A simple **decentralized application (DApp)** that allows users to **store and retrieve numeric values on the Ethereum blockchain**. Built with **React**, **Thirdweb SDK (v5)**, and **MetaMask**, this project demonstrates real-time interaction with smart contracts in a testnet environment.

---

## 🚀 Features

- **Connect Wallet:** Supports MetaMask, Coinbase Wallet, Rainbow Wallet, and in-app wallets.
- **Retrieve Stored Value:** Read the current value stored in the smart contract instantly.
- **Store New Value:** Input a number and store it securely on-chain.
- **Sepolia Testnet Ready:** Experiment without spending real ETH.
- **Modern UI:** Creative gradients, glassmorphism input fields, responsive layout.

---

## 🛠️ Technologies Used

- **React** – Frontend framework  
- **Thirdweb SDK (v5)** – Smart contract interaction  
- **Ethereum (Sepolia Testnet)** – Blockchain network for testing  
- **MetaMask** – Wallet for connecting and signing transactions  

---

## 🔧 Getting Started 

```bash
1️⃣ Clone the repository
git clone https://github.com/yourusername/Storage-Dapp.git
cd Storage-Dapp

2️⃣ Install dependencies
npm install
# or
yarn install

 3️⃣ Setup environment variables
echo "NEXT_PUBLIC_TEMPLATE_CLIENT_ID=your_thirdweb_client_id" > .env.local

4️⃣ Run the development server
npm run dev
# or
yarn dev

 5️⃣ Connect your wallet
# Open the app in your browser, click "Connect Wallet", and select MetaMask or another supported wallet

 6️⃣ Interact with the contract
#   - Click "Get Stored Value" to see the current number
#   - Enter a number and click "Store" to save it on-chain

 7️⃣ Contract Information
echo "Contract Address: 0xf363C8abE2df980ef54aD4Ca51346057dD3cb1c8"
echo "Network: Sepolia Testnet"
echo "Functions:"
echo "  - store(uint256 num) -> Store a number"
echo "  - retrieve() -> Retrieve the stored number"

 8️⃣ Screenshot
# (Add your DApp screenshot to the project folder as 'screenshot.png')

 9️⃣ Use Cases
echo "Use Cases:"
echo "  - Educational tool for learning blockchain development and smart contract interactions"
echo "  - Starter template for building more complex Ethereum DApps"
echo "  - Demonstrates wallet connection and secure on-chain storage in a simple, user-friendly interface"
