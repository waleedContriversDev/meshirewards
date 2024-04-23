import Image from "next/image";
import Profile from "./../../../../assets/images/profile/profile-1.svg"
import Award1 from "./../../../../assets/images/contests/award1.svg"
import Award2 from "./../../../../assets/images/contests/award2.svg"
import Award3 from "./../../../../assets/images/contests/award3.svg"
import Award4 from "./../../../../assets/images/contests/award4.svg"

export default function MyAwardsStats() {
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
                        <h4 className="text-sm text-black font-semibold">
                            My Awards
                        </h4>
                        <span className="text-xs text-gray-500">
                            Most Recent
                        </span>
                        <Image src={Award1} alt="Award 1" width={60} height={60} />
                    </div>

                    <div className="flex flex-col items-start"> 
                        <h4 className="text-sm text-black font-semibold">
                            Most Revenue
                        </h4>
                        <span className="text-xs text-gray-500">
                            January
                        </span>
                        
                    </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                    
                    <div className="flex flex-col items-start"> 
                        
                        <Image src={Award2} alt="Award 2" width={60} height={60} />
                    </div>

                    <div className="flex flex-col items-start"> 
                        
                        <Image src={Award3} alt="Award 3" width={60} height={60} />
                    </div>

                    <div className="flex flex-col items-start"> 
                        
                        <Image src={Award4} alt="Award 4" width={60} height={60} />
                    </div>
                </div>
            </div>
        </div>
    );
}