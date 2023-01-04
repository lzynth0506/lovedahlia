import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Modal() {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/login")
        }, 5000)
    }, [])

    return (
        <div id="defaultModal" className="fixed top-0 left-0 right-0 z-50 w-full p-4 grid h-screen place-items-center bg-black bg-opacity-90">
            <div className="relative max-w-2xl text-center">
                <div className="relative bg-white rounded-lg">
                    <div className="p-12 space-y-2">
                        <Image 
                            src={"/assets/login-modal.svg"}
                            alt="" 
                            width={1920} 
                            height={1080}
                            className="mb-4 w-64 mx-auto"
                        />
                        <h2 className="font-bold text-2xl">Woops! Let me inform you :/</h2>
                        <p>This will directs to our login page!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}