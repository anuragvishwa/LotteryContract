pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public players;

    constructor Lottery() public {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > 0.1 ether);

        players.push(msg.sender);
    }

    function pickWinner() restricted {
        uint256 index = random() % players.length;
        players[index].transfer(this.balance);
        players = new address[](0);
    }

    function random() private view returns (uint256) {
        return uint256(keccak256(block.difficulty, now, players));
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function getPlayers() public view returns (address[]) {
        return players;
    }
}
