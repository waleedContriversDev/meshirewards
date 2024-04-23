import Image from "next/image";
import Logo from "./../../assets/images/common/logo.svg";

export default function ForgetPassword() {
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
                <p className="text-lg">A new link will be sent to your registered
                    work email </p>
                <div className="flex flex-col">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="border border-blue-500 rounded-full px-6 py-4 h-16 mt-4"
                    />
                </div>
                <div className="flex justify-between items-center mt-4">
                    <button className="text-white bg-sky-600 rounded-full w-full h-14 flex justify-center items-center">Reset Password</button>
                </div>
            </div>
        </div>
    );
}