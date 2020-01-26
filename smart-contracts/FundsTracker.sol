pragma solidity >=0.4.21;

pragma experimental ABIEncoderV2;

contract FundsTracker {
    struct Investor {
        uint256 uid;
        uint256 investmentAmt;
    }

    struct Project {
        uint256 uid;
        string projectName;
        mapping(uint256 => Investor) investors;
        uint256 investorCount;
    }

    event ProjectSpending(
        string projectName,
        string merchantID,
        string merchantCategory,
        uint256 amt
    );

    event InvestorMoneySpent(
        string projectName,
        uint256 investorUid,
        uint256 amt
    );

    Project[] private projects;
    uint256 counter;
    address owner;

    constructor() public {
        counter = 0;
        owner = msg.sender;
    }

    modifier restricted() {
        if (msg.sender == owner) _;
    }

    function createNewProject(string memory projName)
        public
        restricted
        returns (uint256 uid)
    {
        projects.push(
            Project({uid: counter++, projectName: projName, investorCount: 0})
        );

        return counter - 1;
    }

    function getProjectNames()
        public
        view
        returns (string[] memory projectNames)
    {
        string[] memory names;
        for (uint256 i = 0; i < projects.length; i++) {
            names[i] = projects[i].projectName;
        }
        return names;
    }

    function getProjectTotalAmt(uint256 projUid)
        public
        view
        returns (uint256 amt)
    {
        for (uint256 i = 0; i < projects.length; i++) {
            if (projects[i].uid == projUid) {
                uint256 total = 0;
                for (uint256 j = 0; j < projects[i].investorCount; j++) {
                    total += projects[i].investors[j].investmentAmt;
                }
                return total;
            }
        }
        return 0;
    }

    function logProjectSpending(
        uint256 projUid,
        string memory merchant,
        string memory merchantCategory,
        uint256 amt
    ) public restricted {
        for (uint256 i = 0; i < projects.length; i++) {
            if (projects[i].uid == projUid) {
                emit ProjectSpending(
                    projects[i].projectName,
                    merchant,
                    merchantCategory,
                    amt
                );
                uint256 amtSent = 0;
                uint256 amtSplit = (amt / projects[i].investorCount);
                while ((amtSent - amt) <= amtSplit) {
                    for (uint256 j = 0; j < projects[i].investorCount; j++) {
                        if(projects[i].investors[j].investmentAmt >= amtSplit) {
                            projects[i].investors[j].investmentAmt -= amtSplit;
                            emit InvestorMoneySpent(projects[i].projectName, projects[i].investors[j].uid, amtSplit);
                            amtSent += amtSplit;
                        }
                    }
                }
                if (amtSent != amt) {
                    uint256 remaining = amt - amtSent;
                    for (uint256 j = 0; j < projects[i].investorCount; j++) {
                        if(projects[i].investors[j].investmentAmt >= remaining) {
                            projects[i].investors[j].investmentAmt -= remaining;
                            emit InvestorMoneySpent(projects[i].projectName, projects[i].investors[j].uid, remaining);
                            amtSent += amtSplit;
                            break;
                        }
                    }
                }
            }
        }
    }

    function addInvestorFundsToProject(
        uint256 projUid,
        uint256 invstUid,
        uint256 funds
    ) public restricted returns (bool success) {
        bool found = false;
        for (uint256 i = 0; i < projects.length; i++) {
            if (projects[i].uid == projUid) {
                bool foundInvestor = false;
                for (uint256 j = 0; j < projects[i].investorCount; j++) {
                    if (projects[i].investors[i].uid == invstUid) {
                        projects[i].investors[i].investmentAmt += funds;
                        foundInvestor = true;
                        break;
                    }
                }

                if (!foundInvestor) {
                    projects[i].investors[projects[i].investorCount++] = (
                        Investor({uid: invstUid, investmentAmt: funds})
                    );
                }

                found = true;
                break;
            }
        }

        if (!found) return false;

    }
}
