import Link from "next/link";
import { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <section className="bg-[url('/assets/background-login.png')] bg-no-repeat bg-cover relative w-screen h-screen">
                <main className="grid h-screen place-items-center">
                    <form className="p-12 bg-white rounded-2xl w-100">
                        <header className="text-center mb-6">
                            <h2 className="font-bold text-3xl">I love roses</h2>
                            <p>Anyways we're excited to see you here!</p>
                        </header>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 uppercase font-bold">email address</label>
                            <input type={'text'} className="border border-black p-2 px-4 rounded-lg" required />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 uppercase font-bold">password</label>
                            <input type={'password'} className="border border-black p-2 px-4 rounded-lg" required />
                        </div>
                        <div className="mb-4">
                            <button onClick={() => console.log("directme")}className="text-red-500">
                                Forgot password?
                            </button>
                        </div>
                        <button className="w-full text-center bg-red-500 p-2 rounded-lg font-bold text-white mb-4">
                            Log In
                        </button>
                        <div id="register-page">
                            <span>
                                Is this your first time?
                                <Link href="/register" className="text-red-500 ml-1">
                                    Register
                                </Link>
                            </span>
                        </div>
                    </form>
                </main>
            </section>
        )
    }
}