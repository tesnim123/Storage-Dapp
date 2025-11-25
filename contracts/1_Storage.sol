// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@thirdweb-dev/contracts/extension/ContractMetadata.sol";

contract Storage is ContractMetadata {

    uint256 private number;
    address private deployer;

    constructor() {
        deployer = msg.sender; // Only deployer can set metadata
    }

    /**
     * @dev Store a number in the contract
     */
    function store(uint256 num) public {
        number = num;
    }

    /**
     * @dev Retrieve the stored number
     */
    function retrieve() public view returns (uint256){
        return number;
    }

    /**
     * @dev Required override for ContractMetadata extension
     */
    function _canSetContractURI() internal view override returns (bool) {
        return msg.sender == deployer;
    }
}
