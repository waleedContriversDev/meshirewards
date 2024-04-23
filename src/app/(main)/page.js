import Image from "next/image";
import BirthdayIcon from "./../assets/images/home/birthday.svg";
import AnniversaryIcon from "./../assets/images/home/anniversary.svg";
import PromotionIcon from "./../assets/images/home/promotion.svg";
import Profile from "./../assets/images/profile/profile-2.svg"

export default function Home() {
  return (
    <>
      <div className="flex flex-col border rounded-lg border-slate-300">
        <div className="rounded-lg bg-color-primary h-28 w-full"></div>
      </div>

      <div className="flex flex-wrap mt-4">
        <div className="w-3/4">
          <div className="flex flex-col border rounded-lg border-slate-300 px-6 py-4">
            <h2 className="text-xl font-bold text-black">Months Newsletter</h2>
            <div className="mt-4 flex-col border rounded-lg border-slate-300 border-s-8 border-s-sky-600 px-6 py-4">
              <h3 className="text-base text-black font-semibold">April is here!</h3>
              <p className="mt-4 text-sm text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate odio vel massa maximus varius. Morbi vel ipsum mi. Pellentesque condimentum sagittis  aliquet. Phasellus finibus quam ac ligula aliquet consectetur. Aliquam pulvinar congue lectus condimentum rutrum. Praesent imperdiet luctus magna, at vehicula risus interdum eu. Duis ac vehicula lorem. Aenean quis nunc aliquet, commodo sem sed, viverra tortor. Donec commodo elit eu fringilla laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. In varius at risus ut pretium. Donec ut tellus lectus. Praesent sem nunc, sagittis sit amet aliquam quis, dignissim id urna. Suspendisse posuere suscipit quam, sit amet euismod tellus vehicula non. Suspendisse potenti.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-1/2 pe-3">
              <div className="flex flex-col border rounded-lg border-slate-300 mt-4">
                <div className="flex justify-center border-b rounded-t-lg border-slate-300 py-2 bg-color-primary h-12">
                  <h2 className="text-lg text-white">Employee Spotlight</h2>
                </div>
                <div className="flex items-center py-2 px-4">
                  <Image src={Profile} width={120} height={120} alt="Profile Image" />
                  <div className="flex flex-col items-start ps-5">
                    <h2 className="text-lg text-black font-bold">
                      ALANA ABRO
                    </h2>
                    <h3 className="text-xs text-black">
                      Deputy Manager | Tech Team
                    </h3>
                  </div>
                </div>
                <div className="p-2 flex justify-center">
                  <span className="text-sm text-red-600 font-semibold">Congratulations on the promotion!</span>
                </div>
              </div>
            </div>
            <div className="w-1/2 ps-3">
              <div className="flex flex-col border rounded-lg border-slate-300 mt-4">
                <div className="flex justify-center border-b rounded-t-lg  border-slate-300 py-2 bg-color-primary h-12">
                  <h2 className="text-lg text-white">Employee Spotlight</h2>
                </div>
                <div className="flex items-center py-2 px-4">
                  <Image src={Profile} width={120} height={120} alt="Profile Image" />
                  <div className="flex flex-col items-start ps-5">
                    <h2 className="text-lg text-black font-bold">
                      ALANA ABRO
                    </h2>
                    <h3 className="text-xs text-black">
                      Deputy Manager | Tech Team
                    </h3>
                  </div>
                </div>
                <div className="p-2 flex justify-center">
                  <span className="text-sm text-red-600 font-semibold">Welcome to the team!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 ps-4">
          <div className="flex flex-col border rounded-lg border-slate-300">
            <div className="flex justify-center border-b border-slate-300 py-2">
              <h2 className="text-xl font-bold text-black">Months Milestones</h2>
            </div>
            <div className="flex flex-col justify-center items-center py-3">
              <div className="flex justify-center items-center mt-3">
                <Image src={BirthdayIcon} alt="Birthday Icon" width={60} height={60} />
                <div className="flex flex-col ps-5">
                  <span className="text-3xl text-gray-800">17</span>
                  <span className="text-sm text-gray-800 mt-2">Birthdays</span>
                </div>
              </div>
              <div className="flex justify-center items-center mt-5">
                <Image src={AnniversaryIcon} alt="Anniversary Icon" width={60} height={60} />
                <div className="flex flex-col ps-5">
                  <span className="text-3xl text-gray-800">20</span>
                  <span className="text-sm text-gray-800 mt-2">Anniversary</span>
                </div>
              </div>
              <div className="flex justify-center items-center mt-5">
                <Image src={PromotionIcon} alt="Promtion Icon" width={60} height={60} />
                <div className="flex flex-col ps-5">
                  <span className="text-3xl text-gray-800">19</span>
                  <span className="text-sm text-gray-800 mt-2">Promotions</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col border rounded-lg border-slate-300 mt-4">
            <div className="flex justify-center border-b border-slate-300 py-2">
              <h2 className="text-xl font-bold text-black">Quick Links</h2>
            </div>
            <div className="flex flex-col justify-center items-center py-3 h-44">

            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
      <div className="w-1/3 pe-3">
          <div className="flex flex-col border rounded-lg border-slate-300 mt-4">
            <div className="flex justify-center border-b rounded-t-lg  border-slate-300 py-2 bg-color-primary h-12">
              <h2 className="text-lg text-white">Company Mission</h2>
            </div>
            <div className="flex items-center py-2 px-4 h-40">
              
            </div>
            
          </div>
        </div>
        <div className="w-1/3 pe-3">
          <div className="flex flex-col border rounded-lg border-slate-300 mt-4">
            <div className="flex justify-center border-b rounded-t-lg  border-slate-300 py-2 bg-color-primary h-12">
              <h2 className="text-lg text-white">Company Values</h2>
            </div>
            <div className="flex items-center py-2 px-4 h-40">
              
            </div>
            
          </div>
        </div>
        <div className="w-1/3">
          <div className="flex flex-col border rounded-lg border-slate-300 mt-4">
            <div className="flex justify-center border-b rounded-t-lg  border-slate-300 py-2 bg-color-primary h-12">
              <h2 className="text-lg text-white">Company Vision</h2>
            </div>
            <div className="flex items-center py-2 px-4 h-40">
              
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
