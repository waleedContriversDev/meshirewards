import Image from "next/image";
import Profile from "./../../../../assets/images/profile/profile-1.svg"


export default function LastRecognised() {
    return (
        <div className="flex flex-col border rounded-lg border-slate-300 py-2 mt-2">
            <div className="flex justify-center border-b border-slate-300 pb-1">
                <h4 className="text-base font-bold">Last Recognized By</h4>
            </div>
            <div className="p-1">
                <div className="flex items-center mb-2">
                    <select className="w-full flex-grow border border-gray-300 rounded p-2 text-xs">
                        <option>Filter By:</option>
                        {/* Dummy options */}
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <div className="flex items-center mb-2 px-4">
                        <Image src={Profile} alt="Profile Image" width={40} height={40} />
                        <div className="ps-2 flex flex-col">
                            <h4 className="text-base">Rakesh kasturi</h4>
                            <span className="text-xs">April 1, 2024</span>
                        </div>
                    </div>
                    <div className="flex items-center mb-2 px-4">
                        <Image src={Profile} alt="Profile Image" width={40} height={40} />
                        <div className="ps-2 flex flex-col">
                            <h4 className="text-base">Rakesh kasturi</h4>
                            <span className="text-xs">April 1, 2024</span>
                        </div>
                    </div>
                    <div className="flex items-center mb-2 px-4">
                        <Image src={Profile} alt="Profile Image" width={40} height={40} />
                        <div className="ps-2 flex flex-col">
                            <h4 className="text-base">Rakesh kasturi</h4>
                            <span className="text-xs">April 1, 2024</span>
                        </div>
                    </div>
                    <div className="flex items-center mb-2 px-4">
                        <Image src={Profile} alt="Profile Image" width={40} height={40} />
                        <div className="ps-2 flex flex-col">
                            <h4 className="text-base">Rakesh kasturi</h4>
                            <span className="text-xs">April 1, 2024</span>
                        </div>
                    </div>
                    <div className="flex items-center mb-2 px-4">
                        <Image src={Profile} alt="Profile Image" width={40} height={40} />
                        <div className="ps-2 flex flex-col">
                            <h4 className="text-base">Rakesh kasturi</h4>
                            <span className="text-xs">April 1, 2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}