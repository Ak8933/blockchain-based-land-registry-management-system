// scripts/track.js
const { ethers } = require("hardhat");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");

  // Replace with your transaction hash
  const txHash = "0x28fd02aafc255c98349ae68a41ba0fc8a0bf08b3ad7d5c05ead1851068000d49";

  try {
    // Fetch transaction details
    const tx = await provider.getTransaction(txHash);
    console.log("Transaction:", tx);

    // Fetch transaction receipt
    const receipt = await provider.getTransactionReceipt(txHash);
    console.log("Transaction Receipt:", receipt);

  } catch (error) {
    console.error("Error fetching transaction details:", error);
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
