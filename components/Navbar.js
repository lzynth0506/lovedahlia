import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/router";
import Modal from "./Modal";

export default function Navbar() {
    const [openTab, setOpenTab] = useState();
    const [modalOpen, setModal] = useState(false);

    useEffect(() => {
        if (modalOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
    });

    const router = useRouter();

    return (
        <header className="border border-neutral-200">
            <nav className="container mx-auto flex items-center justify-between px-12 p-2">
                <div id="logo">
                    <Image 
                        src={"/assets/logo.svg"} 
                        width="0" 
                        height="0" 
                        className="w-48 cursor-pointer"
                        onClick={() => setOpenTab() + router.push("/")} 
                        alt="hehe" 
                    />
                </div>
                <div id="right-panel" className="inline-flex items-center">
                    <div className="relative mr-6">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search..." />
                    </div>
                    <div id="routes">
                        <button 
                            onClick={() => setOpenTab(1) + router.push("/main")} 
                            className={`${openTab === 1 ? "bg-red-500 font-bold p-2 rounded-lg px-4 text-white" : "" } mr-4`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => setOpenTab(2) + router.push("/shop")} 
                            className={`${openTab === 2 ? "bg-red-500 font-bold p-2 rounded-lg px-4 text-white" : ""} mr-4`}
                        >
                            Shop
                        </button>
                        <button
                            onClick={() => setModal(true)}
                        >
                            Login
                        </button>
                    </div>
                </div>
                {modalOpen && <Modal />}
            </nav>
        </header>
    )
}