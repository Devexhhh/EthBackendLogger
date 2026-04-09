# USDT Transfer Log Poller

A lightweight Node.js + TypeScript script to fetch **ERC-20 Transfer events** (USDT) from a specific Ethereum block using **ethers.js** and an RPC provider.

---

## Features

* Fetch logs from any block on Ethereum mainnet
* Tracks **USDT (Tether)** transfer events
* Uses `ethers.js` for fast RPC interaction
* CLI-based input for dynamic block querying
* Built with TypeScript

---

## Contract Details

* Token: Tether (USDT)
* Contract Address:

  ```
  0xdac17f958d2ee523a2206206994597c13d831ec7
  ```
* Event Tracked:

  ```
  Transfer(address indexed from, address indexed to, uint256 value)
  ```

---

## Setup

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Add your RPC URL

Replace in your code:

```ts
const provider = new JsonRpcProvider("YOUR_ALCHEMY_RPC_URL");
```

Get one from Alchemy or any Ethereum RPC provider.

---

## Usage

### Run with a block number

```bash
npm run dev -- 24832297
```

---

### Without argument (if fallback added)

```bash
npm run dev
```

---

## How it Works

* Takes a block number from CLI
* Queries Ethereum logs using `getLogs()`
* Filters by:

  * Contract address (USDT)
  * Transfer event signature
* Prints raw logs to console

---

## Project Structure

```
.
├── src/
│   └── index.ts
├── dist/
│   └── index.js
├── package.json
├── tsconfig.json
└── README.md
```

---

## Future Improvements

* Decode logs into readable transfers (`from`, `to`, `amount`)
* Add filtering by wallet address
* Stream real-time blocks instead of static polling
* Build a UI dashboard (mini Etherscan-style)
* Store logs in a database

---

## Example Output

```bash
Logs for block 24832297:
[
  {
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    topics: [...],
    data: '0x...',
    blockNumber: 24832297,
    ...
  }
]
```

---

## Tech Stack

* TypeScript
* ethers.js
* Node.js

---

## License

MIT License

---

## Acknowledgements

* Ethereum
* Alchemy
* ethers.js

---

