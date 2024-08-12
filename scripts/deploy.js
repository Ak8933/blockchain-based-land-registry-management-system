// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
  // Setup accounts
  const [buyer, seller, inspector, lender] = await ethers.getSigners()

  // Deploy Real Estate
  const RealEstate = await ethers.getContractFactory('RealEstate')
  const realEstate = await RealEstate.deploy()
  await realEstate.deployed()

  console.log(`Deployed Real Estate Contract at: ${realEstate.address}`)
  console.log(`Minting properties...\n`)

  for (let i = 0; i < 5; i++) {
    const transaction = await realEstate.connect(seller).mint(`https://gateway.pinata.cloud/ipfs/QmWgRkM5CBUMMVAj3EwaiNnsfSLNyYNzrcAFQDS8f35kNg/${i + 1}.json`)
    await transaction.wait()
  }


//https://ipfs.io/ipfs/QmQVcpsjrA6cr1iJjZAodYwmPekYgbnXGo4DFubJiLc2EB/


  // Deploy Escrow
  const Escrow = await ethers.getContractFactory('Escrow')
  const escrow = await Escrow.deploy(
    realEstate.address,
    seller.address,
    inspector.address,
    lender.address
  )
  await escrow.deployed()

  console.log(`Deployed Escrow Contract at: ${escrow.address}`)
  console.log(`Listing properties...\n`)

  for (let i = 0; i < 5; i++) {
    // Approve properties...
    let transaction = await realEstate.connect(seller).approve(escrow.address, i + 1)
    await transaction.wait()
  }

  // Listing properties...
  transaction = await escrow.connect(seller).list(1, buyer.address, tokens(20), tokens(10))
  await transaction.wait()

  transaction = await escrow.connect(seller).list(2, buyer.address, tokens(15), tokens(5))
  await transaction.wait()

  transaction = await escrow.connect(seller).list(3, buyer.address, tokens(10), tokens(5))
  await transaction.wait()

  transaction = await escrow.connect(seller).list(4, buyer.address, tokens(8), tokens(4))
  await transaction.wait()

  transaction = await escrow.connect(seller).list(5, buyer.address, tokens(7), tokens(3))
  await transaction.wait()

  console.log(`Finished.`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

























//TODAY -------------------------
// deploy.js
// const hre = require("hardhat");
// const { hashes } = require('./path/to/register.js'); // Adjust the path accordingly

// const tokens = (n) => {
//   return ethers.utils.parseUnits(n.toString(), 'ether')
// }

// async function main() {
//   // Setup accounts
//   const [buyer, seller, inspector, lender] = await ethers.getSigners()

//   // Deploy Real Estate
//   const RealEstate = await ethers.getContractFactory('RealEstate')
//   const realEstate = await RealEstate.deploy()
//   await realEstate.deployed()

//   console.log(`Deployed Real Estate Contract at: ${realEstate.address}`)
//   console.log(`Minting properties...\n`)

//   // Mint properties using hashes from the array
//   for (let i = 0; i < hashes.length; i++) {
//     const transaction = await realEstate.connect(seller).mint(`https://gateway.pinata.cloud/ipfs/${hashes[i]}`)
//     await transaction.wait()
//   }

//   // Deploy Escrow
//   const Escrow = await ethers.getContractFactory('Escrow')
//   const escrow = await Escrow.deploy(
//     realEstate.address,
//     seller.address,
//     inspector.address,
//     lender.address
//   )
//   await escrow.deployed()

//   console.log(`Deployed Escrow Contract at: ${escrow.address}`)
//   console.log(`Listing properties...\n`)

//   // Approve properties dynamically based on the number of hashes
//   for (let i = 0; i < hashes.length; i++) {
//     let transaction = await realEstate.connect(seller).approve(escrow.address, i + 1)
//     await transaction.wait()
//   }

//   // Listing properties dynamically based on the number of hashes
//   for (let i = 0; i < hashes.length; i++) {
//     let transaction = await escrow.connect(seller).list(i + 1, buyer.address, tokens(20), tokens(10))
//     await transaction.wait()
//   }

//   console.log(`Finished.`)
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
