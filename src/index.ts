import { id, JsonRpcProvider } from "ethers";

const provider = new JsonRpcProvider(
  "https://eth-mainnet.g.alchemy.com/v2/dhuFXA2gtsJsGgz7diJSo",
);

const pollBlock = async (blockNumber: number) => {
  try {
    const logs = await provider.getLogs({
      address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
      fromBlock: blockNumber,
      toBlock: blockNumber,
      topics: [id("Transfer(address,address,uint256)")],
    });
    console.log(`Logs from block ${blockNumber}`);
    console.log(logs);
  } catch (err) {
    console.log("Error fetching logs: ", err);
  }
};
const blockArg = process.argv[2];
if (!blockArg) {
  console.log("Please provide a BLOCK NUMBER");
  console.log("Example: npm run dev -- 24832297");
  process.exit(1);
}

const blockNumber = Number(blockArg);

if (isNaN(blockNumber)) {
  console.log("X -- Invalid block number");
  process.exit(1);
}

pollBlock(blockNumber);
