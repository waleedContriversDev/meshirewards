import Image from "next/image";
import Logo from "./../../assets/images/common/logo.svg";
import Link from "next/link";

export default function Login() {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="w-80 flex flex-col">
                <Image
                    src={Logo}
                    alt="Meshi Rewards Logo"
                    width={82}
                    height={58}
                />
                <h1 className="text-2xl font-bold">Hello!</h1>
                <p className="text-lg">Helping to create excellent
                    cultures & employee experiences </p>
                <div className="flex flex-col">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="border border-blue-500 rounded-full px-6 py-4 h-16 mt-4"
                        
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border border-blue-500 rounded-full px-6 py-4 h-16 mt-4"
                        
                    />
                </div>
                <div className="flex justify-between items-center mt-4">
                    <Link href="/register" className="text-white bg-sky-600 rounded-full w-36 h-12 flex justify-center items-center">Register</Link>
                    <Link href="/login" className="text-white bg-sky-600 rounded-full w-36 h-12 flex justify-center items-center">Login</Link>
                </div>
                <div className="flex justify-center mt-4">
                    <Link href="/forget-password" className="text-sm text-slate-700">Forget Password</Link>
                </div>
            </div>
        </div>
    );
}