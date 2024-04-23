import Image from "next/image";
import Profile from "./../../../../assets/images/profile/profile-1.svg"

export default function MySurveyStats() {
    return (
        <div className="flex flex-col border rounded-lg border-slate-300 py-2 mt-2">
            <div className="flex justify-center border-b border-slate-300 pb-1">
                <div className="flex flex-col items-start">
                    <h2 className="text-xl text-black">
                        Welcome Back,
                    </h2>
                    <h2 className="text-lg text-black font-bold">
                        Jeevan
                    </h2>
                    <h3 className="text-xs text-gray-500">
                        Meshi Associate
                    </h3>
                </div>
                <Image className="ps-1" src={Profile} width={60} height={60} alt="Profile Image" />
            </div>
            <div className="py-2 px-3">
                <div className="flex items-center justify-between mb-2">
                    
                    <div className="flex flex-col items-start"> 
                        <span className="text-sm text-gray-300 font-semibold">
                            Surveys to take
                        </span>
                        <h2 className="mt-1 text-xl text-black font-bold border-s-2 border-sky-600 ps-2 leading-6">
                            1
                        </h2>
                    </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                    
                    <div className="flex flex-col items-start"> 
                        <span className="text-sm text-gray-300 font-semibold">
                            Surveys taken
                        </span>
                        <h2 className="mt-1 text-xl text-black font-bold border-s-2 border-sky-600 ps-2 leading-6">
                            2
                        </h2>
                    </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                    
                    <div className="flex flex-col items-start"> 
                        <span className="text-sm text-gray-300 font-semibold">
                            Surveys missed
                        </span>
                        <h2 className="mt-1 text-xl text-black font-bold border-s-2 border-sky-600 ps-2 leading-6">
                            2
                        </h2>
                    </div>
                </div>                
            </div>
        </div>
    );
}