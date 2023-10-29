import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"


function GameRules() {
    return (
        <HoverCard >
            <HoverCardTrigger asChild>
                <Button variant="link" className="text-slate-300 underline">How to play the lottery?</Button>
            </HoverCardTrigger>
            <HoverCardContent className="bg-emerald-900  text-slate-300 border-emerald-700 w-96 mt-10">
                You pay 0.0099 ethers and pick a numer from 1 to 99 to join the current round of lottery. A lucky number is drawn every 60 minutes. The Players who guessed the winning number for this round are the winners, and share the prize. The prize will be distributed to each winner&apos;s address. In case that no one wins the lottery this round, the prize money will roll over to next round. A fixed commision is charged for every purchase.
            </HoverCardContent>
        </HoverCard>

    )
}

export default GameRules