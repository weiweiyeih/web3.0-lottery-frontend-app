import { etherscanAddress } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import ehterscanLogo from "../public/etherscan-logo-light.svg";
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

function EtherscanLink() {
    return (
        <div>
            <Link href={etherscanAddress} target='_blank' className='flex space-x-1 border px-2 py-1 rounded-md'>
                <Image src={ehterscanLogo} alt='etherscan-logo' width={80} />
                <ArrowUpRightIcon className='text-white w-3' />
            </Link>
        </div>
    )
}

export default EtherscanLink
