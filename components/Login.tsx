import React from 'react'
import PoolBalance from './PoolBalance'
import { ConnectWallet } from '@thirdweb-dev/react'

function Login() {
    return (
        <div className='bg-[#091b18] min-h-screen flex flex-col items-center text-white pt-16 space-y-8'>
            <div >
                <h1 className='text-yellow-400 font-bold text-6xl italic'>Lottery99</h1>

            </div>
            <div className='flex flex-col text-center space-y-4 text-xl md:flex-row md:items-baseline md:space-y-0 md:space-x-2'>
                <p>The current prize is</p>
                <div className='text-4xl font-bold animate-pulse text-emerald-500'>
                    <PoolBalance />
                </div>
                <p>and keeps growing!</p>
            </div>
            <div >
                <ConnectWallet
                    btnTitle='Connect Wallet to Win!'
                    modalTitle='Connect your Wallet'
                    modalTitleIconUrl=''
                    welcomeScreen={() => {
                        return (
                            <div className='flex flex-col justify-center items-center p-5 my-auto space-y-2'>
                                <h2 className='text-yellow-400 font-bold text-3xl italic md:text-6xl'>Lottery99</h2>
                                <h3 className='text-sm md:text-xl'>Join the Game to Win!</h3>
                            </div>
                        )
                    }}
                />
            </div>
        </div>
    )
}

export default Login