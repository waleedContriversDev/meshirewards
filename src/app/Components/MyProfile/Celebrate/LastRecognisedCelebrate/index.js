import Image from "next/image";
import Profile from "./../../../../assets/images/profile/profile-1.svg";
import Graph1 from "./../../../../assets/images/celebrate/graph1.png";
import Graph2 from "./../../../../assets/images/celebrate/graph2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function LastRecognisedCelebrate() {
    return (
        <div className="flex flex-col border rounded-lg border-slate-300 py-2 mt-2">
            <div className="flex justify-center border-b border-slate-300 pb-1">
                <h4 className="text-base font-bold">Last Recognized</h4>
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
                    <div className="flex justify-between items-center mb-3 px-4">
                        <div className="flex items-center">
                            <Image src={Profile} alt="Profile Image" width={40} height={40} />
                            <div className="ps-2 flex flex-col">
                                <h4 className="text-base">Rakesh kasturi</h4>
                                <span className="text-xs">April 1, 2024</span>
                            </div>
                        </div>
                        <div>
                            <FontAwesomeIcon className="color-primary rotate-45" icon={faPaperPlane} />
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
                            <FontAwesomeIcon className="color-primary rotate-45" icon={faPaperPlane} />
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
                            <FontAwesomeIcon className="color-primary rotate-45" icon={faPaperPlane} />
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
                            <FontAwesomeIcon className="color-primary rotate-45" icon={faPaperPlane} />
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
                            <FontAwesomeIcon className="color-primary rotate-45" icon={faPaperPlane} />
                        </div>
                    </div>

                </div>

                <div className="flex flex-col justify-center items-center mt-5">
                    <Image src={Graph1} alt="Graph1" width={120} height={120} />
                    <p className="mt-2 text-xs text-center px-4">80% of your team has been
                        recognized by you this month</p>
                </div>

                <div className="flex flex-col justify-center items-center mt-5">
                    <Image src={Graph2} alt="Graph1" width={120} height={120} />
                    <p className="mt-2 text-xs text-center px-4">60% of your team has been
                        recognized by others this month</p>
                </div>
            </div>
        </div>
    );
}