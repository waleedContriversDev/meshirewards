import Image from "next/image";
import ProfileImage from "./../../assets/images/profile/profile-2.svg";
import Medal from "./../../assets/images/profile/mdi_medal.svg";
import Cup from "./../../assets/images/profile/cup.svg";

export default function EmployeeProfile() {
    return (
        <>
            <div className="flex flex-col border rounded-lg border-slate-300">
                <div className="relative bg-white h-52 overflow-hidden rounded-lg">
                    <div className="rounded-lg bg-color-primary h-28 w-full"></div>
                    <div className="absolute top-10 left-6 flex items-center">
                        <Image src={ProfileImage} alt="Profile Image" width={145} height={145} className="rounded-full border-4 border-transparent" />
                        <div className="flex flex-col pt-16 ps-1">
                            <h2 className="text-xl font-semibold text-black">Alana Brown</h2>
                            <span className="text-sm text-gray-500">Meshi Associate</span>
                        </div>
                    </div>
                    <div className="absolute right-3 bottom-3 flex items-center">
                        <span className="text-sm font-semibold text-gray-700">Profile status 90%</span>
                        <button className="text-white bg-sky-600 rounded-lg text-xs px-4 py-3 ms-2">Edit Profile</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col border rounded-lg border-slate-300 p-6 mt-4">
                <div className="border-b border-slate-200 pb-2">
                    <h2 className="text-xl font-bold text-black">Contact Me</h2>
                    <div class="flex flex-wrap mt-4">
                        <div class="w-full md:w-1/3">
                            <p className="mb-2 text-sm"><span class="font-semibold">Email:</span> alana.brown@gmail.com</p>
                            <p className="mb-2 text-sm"><span class="font-semibold">Phone Number:</span> +1234567890</p>
                            <p className="mb-2 text-sm"><span class="font-semibold">Title:</span> Software Engineer</p>
                        </div>
                        <div class="w-full md:w-1/3">
                            <p className="mb-2 text-sm"><span class="font-semibold">Location:</span> New York, USA</p>
                            <p className="mb-2 text-sm"><span class="font-semibold">Department:</span> Engineering</p>
                            <p className="mb-2 text-sm"><span class="font-semibold">Store:</span> Store A</p>
                        </div>
                        <div class="w-full md:w-1/3">
                            <p className="mb-2 text-sm"><span class="font-semibold">Hire date:</span> January 1, 2022</p>
                            <p className="mb-2 text-sm"><span class="font-semibold">Birthday:</span> January 1</p>
                            <p className="mb-2 text-sm"><span class="font-semibold">Last promotion date:</span> June 1, 2023</p>
                        </div>
                    </div>
                </div>

                <div className="border-b border-slate-200 pb-2 mt-5">
                    <h2 className="text-xl font-bold text-black">About Me</h2>
                    <p className="mb-2 text-sm mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis viverra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper nibh at libero facilisis viverra. Nullam ut sapien vitae urna interdum lobortis sit amet ac eros. Cras id porta leo. Integer vel ipsum quis dui feugiat porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In accumsan accumsan vestibulum. Vestibulum rutrum fermentum urna, eu fringilla erat vulputate at. Ut accumsan enim tincidunt, accumsan ante vitae, fringilla enim. Aenean hendrerit neque tempor, efficitur sem nec, feugiat magna. Pellentesque ultrices nibh sem, vitae placerat ligula blandit non. Praesent turpis ante, placerat ut efficitur a, rutrum aliquet ipsum. Proin commodo, sem et pharetra facilisis, mi tellus dapibus ipsum, vel tristique tortor sapien id est. Ut eu ultrices ex, et porta risus. Vestibulum augue erat, placerat id lobortis non, pellentesque vitae orci.</p>
                </div>
                <div className="border-b border-slate-200 pb-2 mt-5">
                    <h2 className="text-xl font-bold text-black">Interests</h2>
                    <p className="mb-2 text-sm mt-3">What is your favorite food?<br />What is your favorite color?<br />What is your favorite movie and TV series?<br />What is your favorite candy?<br />What is your favorite ice cream flavor?<br />What is your favorite music genre?<br />What is your favorite animal?</p>
                </div>

                <div className="border-b border-slate-200 pb-2 mt-5">
                    <h2 className="text-xl font-bold text-black">Awards</h2>
                    <div className="flex justify-start items-center mt-3">
                        <div className="flex flex-col items-center justify-center">
                            <Image className="mb-2" src={Medal} alt="Medal" width={65} height={65} />
                            <span className="text-sm text-black mt-2">Top Sales January</span>
                        </div>
                        <div className="flex flex-col items-center justify-center ms-5">
                            <Image className="mb-2" src={Cup} alt="Cup" width={65} height={65} />
                            <span className="text-sm text-black mt-2">Top Customer Service </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}