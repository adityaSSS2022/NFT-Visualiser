
// const { ethers } = require("hardhat");

// async function main() {

//   const SuperMarioWorld = await ethers.getContractFactory("SuperMarioWorld");
//   const superMarioWorld = await SuperMarioWorld.deploy("SuperMarioWorld", "SPRM");

//   await superMarioWorld.deployed();
//   console.log("Success! Contract was deployed to: ", superMarioWorld.address);

//   await superMarioWorld.mint("https://ipfs.io/ipfs/Qmch3m7DEFYRaZiFG6gc8qgkBMS3nrTvM5h5v9xZK6rGEz")
//   console.log("NFT successfully minted");
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });


//   //await superMarioWorld.mint("https://ipfs.io/ipfs/Qmch3m7DEFYRaZiFG6gc8qgkBMS3nrTvM5h5v9xZK6rGEz")



// const { ethers } = require("hardhat");

// async function main() {

//   const SuperMarioWorld = await ethers.getContractFactory("SuperMarioWorldOZ");
//   const superMarioWorld = await SuperMarioWorld.deploy("SuperMarioWorldOZ", "SPRMO");

//   await superMarioWorld.deployed();
//   console.log("Success! Contract was deployed to: ", superMarioWorld.address);

//   await superMarioWorld.mint("https://ipfs.io/ipfs/QmYoVjXNGbAVHKucFJ3xw8MMxWqFXHtyWPLzf4EB8aLW4f")

//   console.log("NFT successfully minted");
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });



const { ethers } = require("hardhat");

async function main() {

  const SuperMarioWorld = await ethers.getContractFactory("SuperMarioWorldERC1155");
  const superMarioWorld = await SuperMarioWorld.deploy("SuperMarioWorldERC1155", "SPRME");

  await superMarioWorld.deployed();
  console.log("Success! Contract was deployed to: ", superMarioWorld.address);

  await superMarioWorld.mint(5, "https://ipfs.io/ipfs/QmUYMgqe6AQVaw2UjYJ2NdAEdRnSB2k6VdMnHjhQ1swvMG")

  console.log("NFT successfully minted");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 