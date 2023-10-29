"use client"

import { useAddress, useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react"

import Login from "../components/Login";
import GameRules from "@/components/GameRules";
import AdminControls from "@/components/AdminControls";
import TicketsPurchased from "@/components/TicketsPurchased";
import CountdownTimer from "@/components/CountdownTimer";
import EtherscanLink from "@/components/EtherscanLink";
import Loading from "@/components/Loading";
import PoolBalance from "@/components/PoolBalance";

import { currency, lottery } from "@/constants";

import { useState } from "react";
import { ethers } from "ethers";

import toast from "react-hot-toast";
import Marquee from "react-fast-marquee";





export default function Home() {
  const address = useAddress();
  const { contract, isLoading: isContractLoading } = useContract(lottery);
  const { mutateAsync: buyTicket } = useContractWrite(contract, "buyTicket");
  const { data: currentRound } = useContractRead(contract, "getRoundCount");
  const { data: owner } = useContractRead(contract, "getOwner");
  const { data: allPlayers } = useContractRead(contract, "getRoundToAllPlayers", [currentRound]);
  const { data: lastWinningNum } = useContractRead(contract, "getRoundToWinningNumber", [currentRound - 1]);
  const { data: costOfTicket } = useContractRead(contract, "getCostOfTicket");

  const [pickedNumber, setPickedNumber] = useState<number>(1);

  const clickHandler = async () => {
    const notification = toast.loading("Buying your ticket...");

    try {
      const data = await buyTicket({
        args: [pickedNumber],
        overrides: {
          value: ethers.utils.parseEther("0.0099"),
        },
      });
      toast.success("Tickets purchased successfully!", { id: notification })
      console.info("contract call successs", data);
    } catch (error) {
      toast.error("Whoops something went wrong!"), {
        id: notification,
      }

      console.error("contract call failure", error);
    }
  }

  if (!address) return (<Login />)
  if (isContractLoading) return (<Loading />)

  return (

    <div className="flex flex-col items-center justify-start min-h-screen md:mt-20 mt-10 space-y-4">
      {/* marguee */}
      <Marquee className="bg-[#0a1f1c] p-5 mb-5 " gradient={false} speed={100}>
        <div className="flex space-x-6 mx-10 text-white font-bold">
          <h4>This is Round #{currentRound && currentRound.toString()}, and {allPlayers && allPlayers.length} tickets were sold in this round.</h4>
          <h4>Join the game to win the PRIZE!</h4>
          {(currentRound - 1) > 0 && (
            <h4>The winning number of last round ({currentRound - 1}) is {lastWinningNum && lastWinningNum.toString()}.</h4>
          )}
        </div>
      </Marquee>

      {/* admin panel */}
      {owner === address && (
        <div className="flex justify-center">
          <AdminControls />
        </div>
      )}

      {/* prize & count down timer */}
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:items-start md:space-y-0">
        <div className="stats-container">
          <h1 className=" text-4xl text-center font-bold mb-4">Current Prize</h1>
          <div className="stats text-4xl text-center font-semibold text-emerald-500 animate-pulse">
            <PoolBalance />
          </div>
          <div>
            <CountdownTimer />
          </div>
        </div>
        <div className="stats-container space-y-2">
          <div className="flex justify-between items-center p-1">
            <h2>Cost of a lottery ticket:</h2>
            <p className="font-bold">{costOfTicket && ethers.utils.formatEther(costOfTicket).toString()} {currency}</p>
          </div>

          {/* buy ticket & tickets purchased */}
          <div className="stats flex justify-between items-center  space-x-2">
            <p>Pick your lucky number 👉</p>
            <input className="stats text-center font-bold text-3xl p-1 border " type="number" min={1} max={99} value={pickedNumber} onChange={(e) => setPickedNumber(Number(e.target.value))} />

          </div>
          <button
            className="mt-5 w-full bg-gradient-to-br from-orange-500 to-emerald-600 px-10 py-5 rounded-md shadow-xl disabled:from-gray-600 disabled:to-gray-600 disabled:text-gray-100 disabled:cursor-not-allowed"
            onClick={clickHandler}
          >Buy a lottery ticket for {costOfTicket && ethers.utils.formatEther(costOfTicket).toString()} {currency}
          </button>
          <TicketsPurchased />
        </div>
      </div>

      <GameRules />
      <EtherscanLink />
    </div>


  )
}
