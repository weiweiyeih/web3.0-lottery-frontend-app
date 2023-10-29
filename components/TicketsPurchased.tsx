import { lottery } from "@/constants";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";

function TicketsPurchased() {
    const address = useAddress();
    const { contract, isLoading: isContractLoading } = useContract(lottery);
    const { data: round } = useContractRead(contract, "getRoundCount");
    const { data: selectedNums } = useContractRead(contract, "getRoundToAddressToSelectedNumbers", [round, address])

    return (
        <>
            {selectedNums && (
                <div className="stats">
                    <p className="mb-3 italic text-sm">You have purchased {selectedNums.length} tickets in this round</p>
                    <div className="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-5  gap-2 ">
                        {selectedNums.map((item: number, index: number) => (
                            <p key={index} className="stats bg-emerald-500/30 text-emerald-300 text-center  flex flex-shrink-0 items-center justify-center">{item.toString()}</p>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default TicketsPurchased