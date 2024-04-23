import Image from "next/image";
import Profile from "./../../assets/images/profile/profile-2.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faThumbTack, faFaceSmile, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Chat() {
    return (
        <>
            <div className="flex flex-col border rounded-lg border-slate-300">
                <div className="rounded-lg bg-color-primary h-28 w-full"></div>
            </div>

            <div className="flex flex-col justify-between border rounded-lg border-slate-300 mt-4 h-96">
                <div className="flex items-center rounded-lg  bg-gray-300 h-24 w-full px-6">
                    <div className="flex items-center py-2 px-4">
                        <Image src={Profile} width={70} height={70} alt="Profile Image" />
                        <div className="flex flex-col items-start ps-5">
                            <h2 className="text-lg text-black font-bold">
                                ALANA ABRO
                            </h2>
                            <h3 className="text-xs text-black">
                                Last seen 12h ago
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg bg-gray-300 h-24 w-full flex flex-wrap items-center px-6">
                    <div className="w-3/4">
                        <input type="text" className="w-full rounded-lg h-12 px-2" placeholder="Type message here..." />
                    </div>
                    <div className="w-1/4 flex items-center justify-end">
                        <div className="flex items-center space-x-3">
                            <FontAwesomeIcon className="h-4 w-4" icon={faThumbTack} />
                            <FontAwesomeIcon className="h-4 w-4" icon={faFaceSmile} />
                            <FontAwesomeIcon className="h-4 w-4" icon={faPaperclip} />
                        </div>
                        <button className="ms-2 text-white bg-sky-600 rounded-lg w-16 h-9 text-center flex items-center px-5"><FontAwesomeIcon className="h-4 w-4" icon={faPaperPlane} /></button>
                    </div>
                </div>
            </div>

        </>
    );
}