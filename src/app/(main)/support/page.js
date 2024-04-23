import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";


export default function Support() {
    return (
        <>
            <div className="flex flex-col border rounded-lg border-slate-300">
                <div className="rounded-lg bg-color-primary h-28 w-full"></div>
            </div>

            <div className="flex flex-col border rounded-lg border-slate-300 p-6 mt-4">
                <div className="pb-2">
                    <h2 className="text-xl font-bold text-black">FAQ</h2>
                    <p className="mb-2 text-sm mt-3">
                        How to give points<br />
                        How to buy points<br />
                        How to redeem points<br />
                        How to read<br />
                    </p>
                </div>
            </div>

            <div className="flex flex-col border rounded-lg border-slate-300 p-6 mt-4">
                <div className="pb-2">
                    <h2 className="text-xl font-bold text-black">Submit Ticket</h2>
                    <div class="flex flex-wrap mt-4">
                        <div class="w-full md:w-1/4 px-2">
                            <input
                                type="text"
                                className="w-full flex-grow border border-gray-300 rounded p-2  text-xs"
                                placeholder="First Name"
                            />
                        </div>
                        <div class="w-full md:w-1/4 px-2">
                            <input
                                type="text"
                                className="w-full flex-grow border border-gray-300 rounded p-2  text-xs"
                                placeholder="Last Name"
                            />
                        </div>
                        <div class="w-full md:w-1/4 px-2">
                            <input
                                type="email"
                                className="w-full flex-grow border border-gray-300 rounded p-2  text-xs"
                                placeholder="Email"
                            />
                        </div>
                        <div class="w-full md:w-1/4 px-2">
                            <select className="flex-grow border border-gray-300 rounded p-2  text-xs w-full">
                                <option>Select Issue</option>
                                {/* Dummy options */}
                                <option>Issue 1</option>
                                <option>Issue 2</option>
                                <option>Issue 3</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex flex-wrap mt-4 px-2">
                        <textarea className="w-full border rounded-lg border-slate-300 p-4 text-xs" placeholder="Add Message" rows={4}></textarea>
                    </div>

                    <div className="flex items-center justify-end mt-4 px-2">


                        <FontAwesomeIcon className="h-6 w-6" icon={faPaperclip} />

                        <button className="ms-2 text-white bg-sky-600 rounded-lg w-16 h-9 text-center flex items-center px-5"><FontAwesomeIcon className="h-4 w-4" icon={faPaperPlane} /></button>
                    </div>

                </div>
            </div>
        </>
    );
}