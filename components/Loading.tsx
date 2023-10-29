import { GridLoader } from "react-spinners";

function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen
    space-y-4">
            <GridLoader color="#36d7b7" size={30} />
            <h1 className="text-[#36d7b7]">Loading Lottery99 now</h1>
        </div>
    )
}

export default Loading