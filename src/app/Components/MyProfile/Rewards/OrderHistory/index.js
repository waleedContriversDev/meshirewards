import Image from "next/image";
import Profile from "./../../../../assets/images/profile/profile-1.svg"


export default function OrderHistory() {
    return (
        <div className="flex flex-col border rounded-lg border-slate-300 py-2 mt-3">
            <div className="flex justify-center border-b border-slate-300 pb-1">
                <h4 className="text-base font-bold">Order History</h4>
            </div>
            <div className="py-2">
                <div className="flex flex-col">
                    <div className="flex justify-between items-center mb-3 px-4">
                        <div className="flex items-center">
                            <Image src={Profile} alt="Profile Image" width={40} height={40} />
                            <div className="ps-2 flex flex-col">
                                <h4 className="text-base">Rakesh kasturi</h4>
                                <span className="text-xs">April 1, 2024</span>
                            </div>
                        </div>
                        <div>
                            <span className="text-sm font-semibold">-1000</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-3 px-4">
                        <div className="flex items-center">
                            <Image src={Profile} alt="Profile Image" width={40} height={40} />
                            <div className="ps-2 flex flex-col">
                                <h4 className="text-base">Rakesh kasturi</h4>
                                <span className="text-xs">April 1, 2024</span>
                            </div>
                        </div>
                        <div>
                            <span className="text-sm font-semibold">-1000</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-3 px-4">
                        <div className="flex items-center">
                            <Image src={Profile} alt="Profile Image" width={40} height={40} />
                            <div className="ps-2 flex flex-col">
                                <h4 className="text-base">Rakesh kasturi</h4>
                                <span className="text-xs">April 1, 2024</span>
                            </div>
                        </div>
                        <div>
                            <span className="text-sm font-semibold">+1000</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-3 px-4">
                        <div className="flex items-center">
                            <Image src={Profile} alt="Profile Image" width={40} height={40} />
                            <div className="ps-2 flex flex-col">
                                <h4 className="text-base">Rakesh kasturi</h4>
                                <span className="text-xs">April 1, 2024</span>
                            </div>
                        </div>
                        <div>
                            <span className="text-sm font-semibold">-1000</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-3 px-4">
                        <div className="flex items-center">
                            <Image src={Profile} alt="Profile Image" width={40} height={40} />
                            <div className="ps-2 flex flex-col">
                                <h4 className="text-base">Rakesh kasturi</h4>
                                <span className="text-xs">April 1, 2024</span>
                            </div>
                        </div>
                        <div>
                            <span className="text-sm font-semibold">-1000</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}