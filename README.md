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

## 🔧 Getting Started (All-in-One)

```bash
# 1️⃣ Clone the repository
git clone https://github.com/yourusername/Storage-Dapp.git
cd Storage-Dapp

# 2️⃣ Install dependencies
npm install
# or
yarn install

# 3️⃣ Setup environment variables
echo "NEXT_PUBLIC_TEMPLATE_CLIENT_ID=your_thirdweb_client_id" > .env.local

# 4️⃣ Run the development server
npm run dev
# or
yarn dev

# 5️⃣ Connect your wallet
# Open the app in your browser, click "Connect Wallet", and select MetaMask or another supported wallet

# 6️⃣ Interact with the contract
#   - Click "Get Stored Value" to see the current number
#   - Enter a number and click "Store" to save it on-chain
```
## 📷 Screenshot

![Storage DApp Screenshot](./screenshot.png)