import Image from "next/image";
import Graph1 from "./../../assets/images/celebrate/graph1.png";

export default function Reports() {
    return (
        <>
            <div className="flex flex-col border rounded-lg border-slate-300">
                <div className="rounded-lg bg-color-primary h-28 w-full"></div>
            </div>


            <div className="flex flex-col border rounded-lg border-slate-300 p-6 mt-4">
                <div className="pb-2">
                    <h2 className="text-xl font-bold text-black">Reporting Dashboard</h2>
                </div>
                <div class="flex flex-wrap mt-4">
                    <div class="w-full md:w-1/5 px-2">
                        <div className="flex flex-col justify-center items-center mt-5">
                            <Image src={Graph1} alt="Graph1" width={120} height={120} />
                            <p className="mt-2 text-xs text-center px-4">
                                Participation
                            </p>
                        </div>
                    </div>
                    <div class="w-full md:w-1/5 px-2">
                        <div className="flex flex-col justify-center items-center mt-5">
                            <Image src={Graph1} alt="Graph1" width={120} height={120} />
                            <p className="mt-2 text-xs text-center px-4">
                                Active Engagement
                            </p>
                        </div>
                    </div><div class="w-full md:w-1/5 px-2">
                        <div className="flex flex-col justify-center items-center mt-5">
                            <Image src={Graph1} alt="Graph1" width={120} height={120} />
                            <p className="mt-2 text-xs text-center px-4">
                                Active Engagement
                            </p>
                        </div>
                    </div><div class="w-full md:w-1/5 px-2">
                        <div className="flex flex-col justify-center items-center mt-5">
                            <Image src={Graph1} alt="Graph1" width={120} height={120} />
                            <p className="mt-2 text-xs text-center px-4">
                                Active Engagement
                            </p>
                        </div>
                    </div><div class="w-full md:w-1/5 px-2">
                        <div className="flex flex-col justify-center items-center mt-5">
                            <Image src={Graph1} alt="Graph1" width={120} height={120} />
                            <p className="mt-2 text-xs text-center px-4">
                                Participation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}