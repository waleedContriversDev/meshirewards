import Image from "next/image";
import SurveyImage from "./../../assets/images/home/survey.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Surveys() {
    return (
        <>
            <div className="flex flex-col border rounded-lg border-slate-300">
                <div className="rounded-lg bg-color-primary h-28 w-full"></div>
            </div>

            <div className="flex flex-col border rounded-lg border-slate-300 p-6 mt-4">
                <div className="flex flex-col items-center border rounded-lg border-slate-300 p-4 w-28 h-28">
                    <FontAwesomeIcon icon={faPlus} className="text-gray-500 w-14 h-14" />
                    <span className="text-xs mt-2 text-gray-500">Create New</span>
                </div>
                <div className="mt-10">
                    <div className="flex justify-between items-center">
                        <h2 className="text-sm font-bold text-black">Current Surveys</h2>
                    </div>
                    <div class="flex flex-wrap">
                        <div className="w-1/4">
                            <div className="flex flex-col border rounded-lg border-slate-300 py-2 px-3 mt-4">
                                <div className="flex flex-col items-center justify-center relative">
                                    
                                    <Image src={SurveyImage} alt="Nike Reward" className="w-full h-auto mb-2" />
                                    <span className="text-xs mt-2">30 Day New Hire Survey</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="flex justify-between items-center">
                        <h2 className="text-sm font-bold text-black">Past Surveys</h2>
                    </div>
                    <div class="flex flex-wrap">
                        <div className="w-1/4 px-2">
                            <div className="flex flex-col border rounded-lg border-slate-300 py-2 px-3 mt-4">
                                <div className="flex flex-col items-center justify-center relative">
                                    
                                    <Image src={SurveyImage} alt="Nike Reward" className="w-full h-auto mb-2" />
                                    <div className="flex justify-between items-center w-full mt-2">
                                        <span className="text-xs">dsdsdff</span>
                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 px-2">
                            <div className="flex flex-col border rounded-lg border-slate-300 py-2 px-3 mt-4">
                                <div className="flex flex-col items-center justify-center relative">
                                    
                                    <Image src={SurveyImage} alt="Nike Reward" className="w-full h-auto mb-2" />
                                    <div className="flex justify-between items-center w-full mt-2">
                                        <span className="text-xs">dsdsdff</span>
                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 px-2">
                            <div className="flex flex-col border rounded-lg border-slate-300 py-2 px-3 mt-4">
                                <div className="flex flex-col items-center justify-center relative">
                                    
                                    <Image src={SurveyImage} alt="Nike Reward" className="w-full h-auto mb-2" />
                                    <div className="flex justify-between items-center w-full mt-2">
                                        <span className="text-xs">dsdsdff</span>
                                        <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 px-2">
                            <div className="flex flex-col border rounded-lg border-slate-300 py-2 px-3 mt-4">
                                <div className="flex flex-col items-center justify-center relative">
                                    
                                    <Image src={SurveyImage} alt="Nike Reward" className="w-full h-auto mb-2" />
                                    <div className="flex justify-between items-center w-full mt-2">
                                        <span className="text-xs">dsdsdff</span>
                                        <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}