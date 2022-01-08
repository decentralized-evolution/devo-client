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

const getDevoProjects = async () => {
  return new Promise(async (resolve, reject) => {
    const provider = new ethers.providers.InfuraWebSocketProvider("rinkeby");
    const contract = new ethers.Contract(
      devoProjectAddress,
      DevoProject.abi,
      provider
    );
    let projects = [];
    try {
      var latestProjectIndex = await contract.getLatestIndex();
      for (var _i = 0; _i <= latestProjectIndex; _i++) {
        let name = await contract.getProjectName(_i);

        if (name) {
          projects.push({
            id: _i,
            name: name,
            logoURI: await contract.getProjectLogoURI(_i),
            description: await contract.getProjectDescription(_i),
          });
        }
      }
      resolve(projects);
    } catch (e) {
      reject(e);
    }
  });
};

const getDevoProject = async (id) => {
  return new Promise(async (resolve, reject) => {
    const provider = new ethers.providers.InfuraWebSocketProvider("rinkeby");
    const contract = new ethers.Contract(
      devoProjectAddress,
      DevoProject.abi,
      provider
    );
    try {
      let name = await contract.getProjectName(id);
      if (name) {
        resolve({
          id: id,
          name: name,
          logoURI: await contract.getProjectLogoURI(id),
          description: await contract.getProjectDescription(id),
        });
      } else {
        reject("Project not found!");
      }
    } catch (e) {
      reject(e);
    }
  });
};

const createDevoProject = (name, description, logoURI) => {
  return new Promise(async (resolve, reject) => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contractWithSigner = new ethers.Contract(
        devoProjectAddress,
        DevoProject.abi,
        signer
      );
      try {
        await contractWithSigner.createProject(name, logoURI, description);
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

export { getEthers, getDevoProjects, getDevoProject, createDevoProject };
