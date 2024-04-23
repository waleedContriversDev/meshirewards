import Image from "next/image";
import NikeImage from "./../../assets/images/rewards/nike.svg";
import AirbnbImage from "./../../assets/images/rewards/airbnb.svg";
import DominosImage from "./../../assets/images/rewards/dominos.svg";
import BurgerKingImage from "./../../assets/images/rewards/burger-king.svg";

export default function Rewards() {
    return (
        <>
            <div className="flex flex-col border rounded-lg border-slate-300">
                <div className="rounded-lg bg-color-primary h-28 w-full"></div>
            </div>

            <div className="flex flex-col border rounded-lg border-slate-300 p-6 mt-4">
                <div className="">
                    <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-black">Gift Cards</h2>
                    <h2 className="text-xl font-bold color-primary">3350 pts = $33</h2>
                    </div>
                    <div class="flex flex-wrap">
                        <div className="w-1/4 mt-4 px-2">
                            <div className="flex flex-col border rounded-lg border-slate-300 py-2 px-3 mt-3">
                                <div className="flex flex-col items-start justify-center relative">
                                <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2 absolute top-1 right-1">$1= 10Pts </button>
                                    <Image src={NikeImage} alt="Nike Reward" className="w-full h-auto mb-2" />
                                    <div className="mt-2 flex justify-start items-center">
                                        <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2">$ 10</button>
                                        <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2">$ 15</button>
                                        <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2">$ 20</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 mt-4 px-2">
                            <div className="flex flex-col border rounded-lg border-slate-300 py-2 px-3 mt-3">
                                <div className="flex flex-col items-start justify-center relative">
                                <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2 absolute top-1 right-1">$1= 10Pts </button>
                                    <Image src={AirbnbImage} alt="Airbnb Reward" className="w-full h-auto mb-2" />
                                    <div className="mt-2 flex justify-start items-center">
                                        <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2">$ 10</button>
                                        <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2">$ 15</button>
                                        <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2">$ 20</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 mt-4 px-2">
                            <div className="flex flex-col border rounded-lg border-slate-300 py-2 px-3 mt-3">
                                <div className="flex flex-col items-start justify-center relative">
                                <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2 absolute top-1 right-1">$1= 10Pts </button>
                                    <Image src={DominosImage} alt="Dominos Reward" className="w-full h-auto mb-2" />
                                    <div className="mt-2 flex justify-start items-center">
                                        <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2">$ 10</button>
                                        <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2">$ 15</button>
                                        <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2">$ 20</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 mt-4 px-2">
                            <div className="flex flex-col border rounded-lg border-slate-300 py-2 px-3 mt-3">
                                <div className="flex flex-col items-start justify-center relative">
                                <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2 absolute top-1 right-1">$1= 10Pts </button>
                                    <Image src={BurgerKingImage} alt="Burger King Reward" className="w-full h-auto mb-2" />
                                    <div className="mt-2 flex justify-start items-center">
                                        <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2">$ 10</button>
                                        <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2">$ 15</button>
                                        <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2">$ 20</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 mt-4 px-2">
                            <div className="flex flex-col border rounded-lg border-slate-300 py-2 px-3 mt-3">
                                <div className="flex flex-col items-start justify-center relative">
                                <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2 absolute top-1 right-1">$1= 10Pts </button>
                                    <Image src={NikeImage} alt="Nike Reward" className="w-full h-auto mb-2" />
                                    <div className="mt-2 flex justify-start items-center">
                                        <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2">$ 10</button>
                                        <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2">$ 15</button>
                                        <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2">$ 20</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 mt-4 px-2">
                            <div className="flex flex-col border rounded-lg border-slate-300 py-2 px-3 mt-3">
                                <div className="flex flex-col items-start justify-center relative">
                                <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2 absolute top-1 right-1">$1= 10Pts </button>
                                    <Image src={NikeImage} alt="Nike Reward" className="w-full h-auto mb-2" />
                                    <div className="mt-2 flex justify-start items-center">
                                        <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2">$ 10</button>
                                        <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2">$ 15</button>
                                        <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2">$ 20</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 mt-4 px-2">
                            <div className="flex flex-col border rounded-lg border-slate-300 py-2 px-3 mt-3">
                                <div className="flex flex-col items-start justify-center relative">
                                <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2 absolute top-1 right-1">$1= 10Pts </button>
                                    <Image src={NikeImage} alt="Nike Reward" className="w-full h-auto mb-2" />
                                    <div className="mt-2 flex justify-start items-center">
                                        <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2">$ 10</button>
                                        <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2">$ 15</button>
                                        <button className="border border-sky-600 rounded-lg text-sky-600 text-xs font-semibold bg-white py-1 px-2 me-2">$ 20</button>
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