# LOTTERY99 - Web3.0 Lottery App

This is a decentralized lottery app built using Next.js and Web3.0 technologies. Users can participate in the lottery by purchasing tickets and have a chance to win prizes. The app interacts with a smart contract deployed on the Seploia Testnet.

Demo: https://web3-lottery-frontend-app.vercel.app/

## Features

- Participate in a decentralized and transparent lottery.
  - Decentralized, trustless, verified random numbers & automation
- Connect wallet button
- Select numners and purchase lottery tickets.
- Display selected numbers for each ticket.
- View the number of tickets purchased in the current round.
- View the current round count and the winning number of last round.
- Display the current prize and the remaing time to draw.
- Admin controls
  - View the total commision
  - Withdraw commision

## Technologies Used

- [Solidity](https://docs.soliditylang.org/en/v0.8.22/)
- [Chainlink VRF & Automation](https://chain.link/)
- [Thirdweb](https://thirdweb.com/)
- [ethers](https://docs.ethers.org/v5/getting-started/)
- [Next.js](https://nextjs.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [heroicons](https://heroicons.com/)
- [React Spinners](https://www.npmjs.com/package/react-spinners)
- [React < Countdown />](https://www.npmjs.com/package/react-countdown?activeTab=readme)
- [react-hot-toast](https://react-hot-toast.com/)
- [React Fast Marquee](https://www.npmjs.com/package/react-fast-marquee)

## Prerequisites

Before running the app, make sure you have the following installed:

- Node.js
- Ethereum wallet (e.g., MetaMask) with a sufficient balance for ticket purchases.

# Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/weiweiyeih/web3.0-lottery-frontend-app.git
   cd web3.0-lottery-frontend-app
   ```

2. Install dependencies:

   ```cmd
   npm install
   ```

3. Start the development server:

   ```cmd
   npm run dev
   ```

4. Access the app in your browser at http://localhost:3000.

## Usage

1. Connect your Ethereum wallet (e.g., MetaMask) to the app.

2. Purchase tickets for the current lottery round.

3. Wait for the lottery round to end and see if you've won!

# Smart Contarct

See this [repo](https://github.com/weiweiyeih/web3.0-lottery-smart-contract) for details.

It was deployed with Thirdweb.

```
npx thirdweb deploy
```

The created a subscritpion for [Chainlink's VRF](https://vrf.chain.link/sepolia) and registered an Upkeep for [Chainlink's automation](https://automation.chain.link/sepolia).

# License

This project is licensed under the MIT License.

# Acknowledgments

Learnt from and inspired by https://youtu.be/oNlhptQmChc .

Thank you to the developers and contributors of the libraries and other open-source tools used in this project.
