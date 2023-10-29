import { currency, lottery } from "@/constants";
import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react"
import { ethers } from "ethers";
import toast from "react-hot-toast";


function AdminControls() {
    const { contract } = useContract(lottery);
    const { data: CommisionBalance, isLoading } = useContractRead(contract, "getCommisionBalance");
    const { mutateAsync: withdrawCommision } = useContractWrite(contract, "withdrawCommision")

    const clickHandler = async () => {
        const notification = toast.loading("Withdrawing the commision...");

        try {
            const data = await withdrawCommision({ args: [] });
            toast.success("Commission withdrawn successfully!", { id: notification })
            console.info("contract call successs", data);
        } catch (error) {
            toast.error("Whoops something went wrong!"), {
                id: notification,
            }
            console.error("contract call failure", error);
        }
    }

    return (
        <div className='stats-container space-y-2'>
            <h2 className="text-center font-semibold">Admin Controls</h2>
            <p className="text-sm italic">Total Commision to be withdrawn</p>
            <div className='stats'>
                <h3 className="font-bold text-2xl text-center">{CommisionBalance && ethers.utils.formatEther(CommisionBalance).toString()} {currency}</h3>
            </div>
            <button className="mt-5 w-full bg-gradient-to-br from-orange-500 to-emerald-600 px-10 py-5 rounded-md shadow-xl disabled:from-gray-600 disabled:to-gray-600 disabled:text-gray-100 disabled:cursor-not-allowed" onClick={clickHandler}>Withdraw Commision</button>
        </div>
    )
}

export default AdminControls