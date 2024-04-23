import Image from "next/image";
import Profile from "./../../../../assets/images/profile/profile-2.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";


export default function QuickInteract() {
    return (
        <div className="flex flex-col border rounded-lg border-slate-300 py-2">
            <div className="flex justify-center border-b border-slate-300 pb-1">
                <h4 className="text-base font-bold">Quick Interact</h4>
            </div>
            <div className="p-1">
                {/* First row */}
                <div className="flex items-center mb-2">
                    <select  className="flex-grow w-full  text-sm">
                        <option>Select Employee</option>
                        {/* Dummy options */}
                        <option>Employee 1</option>
                        <option>Employee 2</option>
                        <option>Employee 3</option>
                    </select>
                    {/* Employee image */}
                    <Image src={Profile} alt="Employee" width={46} height={46} />
                </div>

                {/* Second row */}
                <div className="flex items-center mb-2">
                    <select className="w-full flex-grow border border-gray-300 rounded p-2  text-xs">
                        <option>Type of Recognition</option>
                        {/* Dummy options */}
                        <option>Recognition Type 1</option>
                        <option>Recognition Type 2</option>
                        <option>Recognition Type 3</option>
                    </select>
                </div>

                {/* Third row */}
                <div className="flex items-center mb-2">
                    <input
                        type="text"
                        className="w-full flex-grow border border-gray-300 rounded p-2  text-xs"
                        placeholder="Type Message..."
                    />
                </div>

                {/* Fourth row */}
                <div className="flex items-center mb-2">
                    <select className="flex-grow border border-gray-300 rounded p-2  text-xs">
                        <option>Company Values</option>
                        {/* Dummy options */}
                        <option>Value 1</option>
                        <option>Value 2</option>
                        <option>Value 3</option>
                    </select>
                </div>

                {/* Fifth row */}
                <div className="flex items-center">
                    <input
                        type="number"
                        className="w-full border border-gray-300 rounded p-2  text-xs"
                        placeholder="Points"
                    />
                </div>

                <div className="flex justify-end mt-2 px-2">
                    <button className="text-white bg-sky-600 rounded-lg w-16 h-9"><FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
            </div>

        </div>
    );
}