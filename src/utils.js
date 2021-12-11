import { ethers } from "ethers";
import DevoProject from "./artifacts/contracts/DevoProject.sol/DevoProject.json";

const devoProjectAddress = "0xBC5440F8044de9Ee7DDF52E5920830aA976F1827";

const getEthers = () => {
  return new Promise(async (resolve, reject) => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      try {
        await provider.send("eth_requestAccounts", []);
        resolve(provider);
      } catch (error) {
        reject(error);
      }
    } else if (window.web3) {
      resolve(window.web3);
    } else {
      reject("Must install Metamask");
    }
  });
};

const getDevoProject = async () => {
  return new Promise(async (resolve, reject) => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        devoProjectAddress,
        DevoProject.abi,
        provider
      );
      var contractWithSigner = contract.connect(signer);
      try {
        await contractWithSigner.createProject("hey project".concat(new Date().getTime()));
        contractWithSigner.on("AddProject", (_owner, _id) => {
          console.log("created a devo project with id -> ", _id.toNumber());
        });
        try {
          const projectName = await contract.getProjectName(3);
          console.log(projectName);
        } catch (e) {
          console.log(e);
        }
        resolve(contractWithSigner);
      } catch (err) {
        reject(err);
      }
    }
  });
};

export { getEthers, getDevoProject };
