import Link from "next/link";
import { FiUser, FiLogOut } from 'react-icons/fi'

const Header = () => {
    return (
        <header className="w-full flex items-center px-2 py-4 bg-white shadow-sm">
            <div className="max-w-screen-xl w-full mx-auto flex items-center justify-between">
                
                <Link href="/">
                    <h1 className="font-bold text-2xl pl-1 hover:tracking-widest duration-300">
                        <span className="text-blue-500">DEV </span>
                        Controle
                    </h1>
                </Link>

                <div className="flex gap-2">
                    <Link href="/dashboard">
                        <FiUser size={26} color="#4b5563" />
                    </Link>
                    <button>
                        <FiLogOut size={26} color="#4b5563" />
                    </button>
                </div>

            </div>
        </header>
    );
}

export default Header;