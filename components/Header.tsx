"use client"

import { useAddress, useContract, useDisconnect } from '@thirdweb-dev/react'
import ConnectedWallet from './ConnectedWallet';

function Header() {
    const address = useAddress();
    const disconnect = useDisconnect();

    return (
        <div className={`grid grid-cols-3 md:grid-cols-5 justify-between items-center py-5 ${!address && 'hidden'}`}>
            <div className='flex flex-col space-y-1 col-span-2 md:col-span-1'>
                <h1 className='text-yellow-400 font-bold text-5xl italic'>Lottery99</h1>
                <div className='md:hidden mr-auto'>
                    <ConnectedWallet address={address} />
                </div>
            </div>

            <div className='hidden md:flex md:space-x-2 md:col-span-3 md:items-center md:justify-center p-2'>
                <ConnectedWallet address={address} />
            </div>

            <div className='ml-auto'>
                <button onClick={disconnect} className='bg-[#036756] text-white px-4 py-2 text-sm rounded-lg'>Logout</button>
            </div>
        </div>
    )
}

export default Header