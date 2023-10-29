import { lottery } from "@/constants";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import Countdown from "react-countdown";

type Props = {
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
}

function CountdownTimer() {
    const { contract } = useContract(lottery);
    const { data: timeLeft, isLoading } = useContractRead(contract, "getTimeLeftToDraw");
    const { data: lotteryState } = useContractRead(contract, "getLotteryState")

    const renderer = ({ hours, minutes, seconds, completed }: Props) => {
        if (lotteryState != 0) {
            return (
                <div>
                    <h2 className="text-center text-xl font-bold">Drawing a lucky number now...</h2>
                </div>
            )
        } else {
            return (
                <div>
                    <h3 className="my-2 text-sm italic">Time Remaining to draw</h3>
                    <div className="flex space-x-6">
                        <div className="flex-1">
                            <div className="countdown animate-pulse">{hours}</div>
                            <div className="countdown-label">hours</div>
                        </div>

                        <div className="flex-1">
                            <div className="countdown animate-pulse">{minutes}</div>
                            <div className="countdown-label">minutes</div>
                        </div>

                        <div className="flex-1">
                            <div className="countdown animate-pulse">{seconds}</div>
                            <div className="countdown-label">seconds</div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            {timeLeft ?
                <Countdown date={Date.now() + timeLeft * 1000} renderer={renderer} /> :
                <div>
                    <h3 className="my-2 text-sm italic">Time Remaining to draw</h3>
                    <div className="flex space-x-6">
                        <div className="flex-1">
                            <div className="countdown animate-pulse">00</div>
                            <div className="countdown-label">hours</div>
                        </div>

                        <div className="flex-1">
                            <div className="countdown animate-pulse">00</div>
                            <div className="countdown-label">minutes</div>
                        </div>

                        <div className="flex-1">
                            <div className="countdown animate-pulse">00</div>
                            <div className="countdown-label">seconds</div>
                        </div>
                    </div>
                    <h3 className="text-center text-xl text-yellow-400 mt-8 font-bold animate-bounce">Buy a ticket now to kick off the drawing!</h3>
                </div>
            }
        </div>

    )
}

export default CountdownTimer