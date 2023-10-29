"use client"

import { currency, lottery } from "@/constants";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { PulseLoader } from "react-spinners";

function PoolBalance() {
    const { contract } = useContract(lottery);
    const { data: balance, isLoading } = useContractRead(contract, "getPoolBalance")

    if (isLoading) return (
        <PulseLoader color="#36d7b7" />
    )
    return (
        <div>
            <p>{balance && ethers.utils.formatEther(balance).toString()} {currency}</p>
        </div>
    )
}

export default PoolBalance