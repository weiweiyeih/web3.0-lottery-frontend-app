interface WalletAddress {
    address: string | undefined
}

function ConnectedWallet({ address }: WalletAddress) {
    return (
        <p className='text-sm text-emerald-500 truncate py-1'>Connected Wallet: <span className='border border-emerald-500 px-1 rounded-sm text-xs'>{address?.substring(0, 5)}...{address?.substring(address.length, address.length - 5)}</span></p>
    )
}

export default ConnectedWallet