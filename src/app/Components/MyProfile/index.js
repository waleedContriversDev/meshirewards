"use client";
import Image from "next/image";
import { usePathname } from 'next/navigation';

import Profile from "./../../assets/images/profile/profile-1.svg"
import HomeIcon from "./../../assets/images/my-profile/home.svg";
import CelebrateIcon from "./../../assets/images/my-profile/celebrate.svg";
import RewardsIcon from "./../../assets/images/my-profile/rewards.svg";
import SurveysIcon from "./../../assets/images/my-profile/surveys.svg";
import ContestsIcon from "./../../assets/images/my-profile/contests.svg";
import ChatIcon from "./../../assets/images/my-profile/chat.svg";
import SupportIcon from "./../../assets/images/my-profile/support.svg";
import ReportsIcon from "./../../assets/images/my-profile/reports.svg";
import ProfileIcon from "./../../assets/images/my-profile/profile.svg";

import RedirectSurveyCard from "./../../assets/images/home/survey.svg";
import RedirectContestCard from "./../../assets/images/home/contest.svg";

// Profile Components
import QuickInteract from "./EmployeeProfile/QuickInteract";
import LastRecognised from "./EmployeeProfile/LastRecognised";

// Home Components
import MyStatsCard from "./Home/MyStatsCard";
import RedirectionCard from "./Home/RedirectionCard";

// Celebrate Component
import LastRecognisedCelebrate from "./Celebrate/LastRecognisedCelebrate";

// Rewards Components
import MyRewardsStats from "./Rewards/MyRewardsStats";
import OrderHistory from "./Rewards/OrderHistory";

// Surveys Components
import MySurveyStats from "./Surveys/MySurveyStats";
import SurveysTaken from "./Surveys/SurveysTaken";

// Contests Components
import MyAwardsStats from "./Contests/MyAwardsStats";
import RecentAwards from "./Contests/RecentAwards";

// Chat Component
import UsersList from "./Chat/UsersList";

// Support Component
import RecentTickets from "./Support/RecentTickets";

// Report Components
import QuickReports from "./Reports/QuickReports";
import RecentReports from "./Reports/RecentReports";

export default function MyProfile() {
    const pathname = usePathname();
    const pages = [
        { icon: HomeIcon, text: "Home", pathName: "/" },
        { icon: CelebrateIcon, text: "Celebrate", pathName: "/celebrate" },
        { icon: RewardsIcon, text: "Rewards", pathName: "/rewards" },
        { icon: SurveysIcon, text: "Surveys", pathName: "/surveys" },
        { icon: ContestsIcon, text: "Contests", pathName: "/contests" },
        { icon: ChatIcon, text: "Chat", pathName: "/chat" },
        { icon: SupportIcon, text: "Support", pathName: "/support" },
        { icon: ReportsIcon, text: "Reports", pathName: "/reports" },
        { icon: ProfileIcon, text: "Profile", pathName: "/employee-profile" }
    ];
    const currentPage = pages.find((page) => page.pathName === pathname);
    return (
        <div className="">
            <div className="flex items-center pt-6 ps-6 pe-2 pb-4">
                <Image src={Profile} width={60} height={60} alt="Profile Image" />
                <div className="flex flex-col items-start ps-5">
                    <h2 className="text-lg text-black font-bold">
                        Jeevan
                    </h2>
                    <h3 className="text-xs text-gray-300">
                        Meshi Associate
                    </h3>
                </div>
            </div>
            <div className="flex justify-center items-center h-16 bg-gray-100 border-s-4 border-sky-600">
                {currentPage && (
                    <>
                        <Image src={currentPage.icon} width={24} height={24} alt={currentPage.text} />
                        <span className="text-lg color-primary font-bold ps-4">
                            {currentPage.text}
                        </span>
                    </>
                )}
            </div>
            <div className="px-2 py-3">
                {currentPage.pathName === "/employee-profile" ?
                    <>
                        <QuickInteract />
                        <LastRecognised />
                    </>
                    : <></>}
                {currentPage.pathName === "/" ?
                    <>
                        <MyStatsCard />
                        <RedirectionCard image={RedirectSurveyCard} text="Two Active Surveys" href="/surveys" />
                        <RedirectionCard image={RedirectContestCard} text="Two Active Contests" href="/contests" />
                    </>
                    : <></>}

                {currentPage.pathName === "/celebrate" ?
                    <>
                        <LastRecognisedCelebrate />
                    </>
                    : <></>}

                {currentPage.pathName === "/rewards" ?
                    <>
                        <MyRewardsStats />
                        <OrderHistory />
                    </>
                    : <></>}

                {currentPage.pathName === "/surveys" ?
                    <>
                        <MySurveyStats />
                        <SurveysTaken />
                    </>
                    : <></>}

                {currentPage.pathName === "/contests" ?
                    <>
                        <MyAwardsStats />
                        <RecentAwards />
                    </>
                    : <></>}

                {currentPage.pathName === "/chat" ?
                    <>
                        <UsersList />
                    </>
                    : <></>}

                {currentPage.pathName === "/support" ?
                    <>
                        <RecentTickets />
                    </>
                    : <></>}

                {currentPage.pathName === "/reports" ?
                    <>
                        <QuickReports />
                        <RecentReports />
                    </>
                    : <></>}
            </div>
        </div>
    );
}