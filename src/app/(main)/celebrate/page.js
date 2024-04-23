import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faPaperPlane, faThumbTack, faFaceSmile, faThumbsUp, faCommentDots, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Profile from "./../../assets/images/profile/profile-1.svg";
import Profile2 from "./../../assets/images/profile/profile-2.svg";
import Image from 'next/image';


export default function Celebrate() {
    return (
        <>
            <div className="flex flex-col border rounded-lg border-slate-300">
                <div className="rounded-lg bg-color-primary h-28 w-full"></div>
            </div>

            <div className="flex flex-wrap mt-4">
                <div className="w-3/4">
                    <div className="flex flex-col border rounded-lg border-slate-300 p-2 mt-4">
                        <div className="pb-2">

                            <div class="flex flex-wrap mt-4">

                                <div class="w-full md:w-1/3 px-2 relative">
                                    <Image className="absolute top-3 left-8" src={Profile} width={70} height={70} alt="Profile Image" />
                                </div>
                                <div class="w-full md:w-1/3 px-2">
                                    <select className="flex-grow border border-gray-300 rounded p-2  text-xs w-full">
                                        <option>Select Type of Recognition</option>
                                        {/* Dummy options */}
                                        <option>Issue 1</option>
                                        <option>Issue 2</option>
                                        <option>Issue 3</option>
                                    </select>
                                </div>
                                <div class="w-full md:w-1/3 px-2">
                                    <select className="flex-grow border border-gray-300 rounded p-2  text-xs w-full">
                                        <option>Select Company Values</option>
                                        {/* Dummy options */}
                                        <option>Issue 1</option>
                                        <option>Issue 2</option>
                                        <option>Issue 3</option>
                                    </select>
                                </div>
                            </div>

                            <div class="flex flex-wrap mt-4 px-2">
                                <textarea className="w-full border rounded-lg border-slate-300 p-4 pt-10 text-xs" placeholder="Add Message" rows={2}></textarea>
                            </div>

                            <div class="flex flex-wrap mt-4">

                                <div class="w-full md:w-1/3 px-2 relative">
                                    <input
                                        type="number"
                                        className="w-full border border-gray-300 rounded p-2  text-xs"
                                        placeholder="Points"
                                    />
                                    <div className="flex items-center mt-2">
                                        <span className="text-base font-semibold text-gray-500">Giving Balance</span>
                                        <span className="text-lg font-bold text-sky-700 ms-2 me-2">|</span>
                                        <span className="text-lg font-semibold text-black">1000 </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-end px-2">

                                <FontAwesomeIcon className="h-4 w-4 ms-2" icon={faThumbTack} />
                                <FontAwesomeIcon className="h-4 w-4 ms-2" icon={faFaceSmile} />
                                <FontAwesomeIcon className="h-4 w-4 ms-2" icon={faPaperclip} />

                                <button className="ms-2 text-white bg-sky-600 rounded-lg w-16 h-9 text-center flex items-center px-5"><FontAwesomeIcon className="h-4 w-4" icon={faPaperPlane} /></button>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col border rounded-lg border-slate-300 py-3 px-4 mt-4">
                        <div className="flex items-start justify-between">
                            <div className="flex flex-col items-start relative">
                                <div className="flex items-center">
                                    <Image src={Profile2} alt="Profile 2" width={50} height={50} />
                                    <p className="ms-2"><span className='font-bold'>Alana Brown</span> was recognized! </p>
                                </div>
                                <div className="flex items-center absolute left-10 top-10">
                                    <Image src={Profile} alt="Profile" width={50} height={50} />
                                    <p className="ms-2">by <span className='font-bold'>Rakesh Katsuri</span>  </p>
                                </div>
                            </div>
                            <div>
                                <span>10 hours ago</span>
                            </div>
                        </div>
                        <div className='mt-16 ps-10'>
                            <p className="text-lg">Great job this week with those customers! 😊 <span className='font-bold'>#CUSTOMEROBSESSED</span></p>
                        </div>
                        <div className='mt-5 flex items-center justify-between'>
                            <div>
                                <span className='text-sm'>
                                    <FontAwesomeIcon icon={faThumbsUp} className='me-2 h-5 w-5' />
                                    You & 14 others like this
                                </span>
                            </div>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faThumbsUp} className='ms-3 h-6 w-6 text-sky-600' />
                                <FontAwesomeIcon icon={faCommentDots} className='ms-3 h-6 w-6 text-sky-600' />
                                <FontAwesomeIcon icon={faCirclePlus} className='ms-3 h-6 w-6 text-sky-600' />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col border rounded-lg border-slate-300 py-3 px-4 mt-4">
                        <div className="flex items-start justify-between">
                            <div className="flex flex-col items-start relative">
                                <div className="flex items-center">
                                    <Image src={Profile2} alt="Profile 2" width={50} height={50} />
                                    <p className="ms-2"><span className='font-bold'>Alana Brown</span> was rewarded with <span className='font-bold'>2000 Points!</span></p>
                                </div>
                                <div className="flex items-center absolute left-10 top-10">
                                    <Image src={Profile} alt="Profile" width={50} height={50} />
                                    <p className="ms-2">by <span className='font-bold'>Rakesh Katsuri</span>  </p>
                                </div>
                            </div>
                            <div>
                                <span>10 hours ago</span>
                            </div>
                        </div>
                        <div className='mt-16 ps-10'>
                            <p className="text-lg">Awesome work on this month’s competition! 😊 <span className='font-bold'>#WORKHARDPLAYHARD</span></p>
                        </div>
                        <div className='mt-5 flex items-center justify-between'>
                            <div>
                                <span className='text-sm'>
                                    <FontAwesomeIcon icon={faThumbsUp} className='me-2 h-5 w-5' />
                                    You & 14 others like this
                                </span>
                                <span className='text-sm ms-4'>
                                    <FontAwesomeIcon icon={faCirclePlus} className='me-2 h-5 w-5' />
                                    2 others added points
                                </span>
                            </div>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faThumbsUp} className='ms-3 h-6 w-6 text-sky-600' />
                                <FontAwesomeIcon icon={faCommentDots} className='ms-3 h-6 w-6 text-sky-600' />
                                <FontAwesomeIcon icon={faCirclePlus} className='ms-3 h-6 w-6 text-sky-600' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 ps-4">
                    <div className="flex flex-col border rounded-lg border-slate-300">
                        <div className="flex justify-center border-b border-slate-300 py-2">
                            <h2 className="text-sm font-bold text-black">Engagement Leaderboard</h2>
                        </div>
                        <div className="py-2">
                            <div className="flex flex-col">
                                <div className="flex justify-between items-center mb-3 px-2">
                                    <div className="flex items-center">
                                        <Image src={Profile} alt="Profile Image" width={24} height={24} />
                                        <div className="ps-2 flex flex-col">
                                            <h4 className="text-xs">Rakesh kasturi</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold">33 Pts</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-3 px-2">
                                    <div className="flex items-center">
                                        <Image src={Profile} alt="Profile Image" width={24} height={24} />
                                        <div className="ps-2 flex flex-col">
                                            <h4 className="text-xs">Rakesh kasturi</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold">33 Pts</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-3 px-2">
                                    <div className="flex items-center">
                                        <Image src={Profile} alt="Profile Image" width={24} height={24} />
                                        <div className="ps-2 flex flex-col">
                                            <h4 className="text-xs">Rakesh kasturi</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold">33 Pts</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-3 px-2">
                                    <div className="flex items-center">
                                        <Image src={Profile} alt="Profile Image" width={24} height={24} />
                                        <div className="ps-2 flex flex-col">
                                            <h4 className="text-xs">Rakesh kasturi</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold">33 Pts</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-3 px-2">
                                    <div className="flex items-center">
                                        <Image src={Profile} alt="Profile Image" width={24} height={24} />
                                        <div className="ps-2 flex flex-col">
                                            <h4 className="text-xs">Rakesh kasturi</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold">33 Pts</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col border rounded-lg border-slate-300 mt-4">
                        <div className="flex justify-center border-b border-slate-300 py-2">
                            <h2 className="text-sm font-bold text-black">Upcoming Birthdays</h2>
                        </div>
                        <div className="py-2">
                            <div className="flex flex-col">
                                <div className="flex justify-between items-center mb-3 px-2">
                                    <div className="flex items-center">
                                        <Image src={Profile} alt="Profile Image" width={24} height={24} />
                                        <div className="ps-2 flex flex-col">
                                            <h4 className="text-xs">Rakesh kasturi</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold">15 Mar</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-3 px-2">
                                    <div className="flex items-center">
                                        <Image src={Profile} alt="Profile Image" width={24} height={24} />
                                        <div className="ps-2 flex flex-col">
                                            <h4 className="text-xs">Rakesh kasturi</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold">15 Mar</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-3 px-2">
                                    <div className="flex items-center">
                                        <Image src={Profile} alt="Profile Image" width={24} height={24} />
                                        <div className="ps-2 flex flex-col">
                                            <h4 className="text-xs">Rakesh kasturi</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold">15 Mar</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-3 px-2">
                                    <div className="flex items-center">
                                        <Image src={Profile} alt="Profile Image" width={24} height={24} />
                                        <div className="ps-2 flex flex-col">
                                            <h4 className="text-xs">Rakesh kasturi</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold">15 Mar</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-3 px-2">
                                    <div className="flex items-center">
                                        <Image src={Profile} alt="Profile Image" width={24} height={24} />
                                        <div className="ps-2 flex flex-col">
                                            <h4 className="text-xs">Rakesh kasturi</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold">15 Mar</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col border rounded-lg border-slate-300 mt-4">
                        <div className="flex justify-center border-b border-slate-300 py-2">
                            <h2 className="text-sm font-bold text-black">Upcoming Anniversary</h2>
                        </div>
                        <div className="py-2">
                            <div className="flex flex-col">
                                <div className="flex justify-between items-center mb-3 px-2">
                                    <div className="flex items-center">
                                        <Image src={Profile} alt="Profile Image" width={24} height={24} />
                                        <div className="ps-2 flex flex-col">
                                            <h4 className="text-xs">Rakesh kasturi</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold">15 Mar</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-3 px-2">
                                    <div className="flex items-center">
                                        <Image src={Profile} alt="Profile Image" width={24} height={24} />
                                        <div className="ps-2 flex flex-col">
                                            <h4 className="text-xs">Rakesh kasturi</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold">15 Mar</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-3 px-2">
                                    <div className="flex items-center">
                                        <Image src={Profile} alt="Profile Image" width={24} height={24} />
                                        <div className="ps-2 flex flex-col">
                                            <h4 className="text-xs">Rakesh kasturi</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold">15 Mar</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-3 px-2">
                                    <div className="flex items-center">
                                        <Image src={Profile} alt="Profile Image" width={24} height={24} />
                                        <div className="ps-2 flex flex-col">
                                            <h4 className="text-xs">Rakesh kasturi</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold">15 Mar</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-3 px-2">
                                    <div className="flex items-center">
                                        <Image src={Profile} alt="Profile Image" width={24} height={24} />
                                        <div className="ps-2 flex flex-col">
                                            <h4 className="text-xs">Rakesh kasturi</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold">15 Mar</span>
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