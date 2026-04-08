import { id, JsonRpcProvider } from "ethers";

const provider = new JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/dhuFXA2gtsJsGgz7diJSo")

const pollBlock = async (blockNumber: number) => {
    const logs = await provider.getLogs({
        address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        fromBlock:  blockNumber,
        toBlock: blockNumber,
        topics: [id("Transfer(address,address,uint256)")]
    })

    console.log(logs);
}

pollBlock(24832297);
