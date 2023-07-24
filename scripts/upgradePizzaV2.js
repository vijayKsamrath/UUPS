const { ethers, upgrades } = require("hardhat");

const PROXY = "0x1165cDB5840A556E1223ED6d17714758A9fB8243"

async function main() {
 const PizzaV2 = await ethers.getContractFactory("PizzaV2");
 console.log("Upgrading Pizza slices ...");
 await upgrades.upgradeProxy(PROXY, PizzaV2);
 console.log("Pizza slices upgraded successfully");
}

main();