import Image from "next/image";
import Profile from "./../../../../assets/images/profile/profile-2.svg"

export default function QuickReports() {
    return (
        <div className="flex flex-col border rounded-lg border-slate-300 py-2">
            <div className="flex justify-center border-b border-slate-300 pb-1">
                <h4 className="text-base font-bold">Quick Reports</h4>
            </div>
            <div className="p-2">
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

                <div className="flex flex-col items-start justify-start mt-2">
                    <div className="flex justify-between items-center mb-1 w-full">
                        <span className="text-sm text-black">Participation</span>
                        <span className="text-sm text-black">56%</span>
                    </div>
                    <div className="flex justify-between items-center mb-1 w-full">
                        <span className="text-sm text-black">Active Engagement</span>
                        <span className="text-sm text-black">56%</span>
                    </div>
                    <div className="flex justify-between items-center mb-1 w-full">
                        <span className="text-sm text-black"># of</span>
                        <span className="text-sm text-black">56%</span>
                    </div>
                    <div className="flex justify-between items-center mb-1 w-full">
                        <span className="text-sm text-black">Participation</span>
                        <span className="text-sm text-black">56%</span>
                    </div>
                    <div className="flex justify-between items-center mb-1 w-full">
                        <span className="text-sm text-black">Active Engagement</span>
                        <span className="text-sm text-black">56%</span>
                    </div>
                    <div className="flex justify-between items-center mb-1 w-full">
                        <span className="text-sm text-black"># of</span>
                        <span className="text-sm text-black">56%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}