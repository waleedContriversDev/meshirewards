"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

import Logo from "./../../assets/images/common/logo.svg";
import MeshiRewards from "./../../assets/images/common/MESHIREWARDS.svg";

// Importing icons
import HomeIcon from "./../../assets/images/navbar/home.svg";
import CelebrateIcon from "./../../assets/images/navbar/celebrate.svg";
import RewardsIcon from "./../../assets/images/navbar/rewards.svg";
import SurveysIcon from "./../../assets/images/navbar/surveys.svg";
import ContestsIcon from "./../../assets/images/navbar/contests.svg";
import ChatIcon from "./../../assets/images/navbar/chat.svg";
import SupportIcon from "./../../assets/images/navbar/support.svg";
import ReportsIcon from "./../../assets/images/navbar/reports.svg";
import NotificationIcon from "./../../assets/images/navbar/notification.svg";

const navItems = [
  { icon: HomeIcon, text: "Home", href: "/" },
  { icon: CelebrateIcon, text: "Celebrate", href: "/celebrate" },
  { icon: RewardsIcon, text: "Rewards", href: "/rewards" },
  { icon: SurveysIcon, text: "Surveys", href: "/surveys" },
  { icon: ContestsIcon, text: "Contests", href: "/contests" },
  { icon: ChatIcon, text: "Chat", href: "/chat" },
  { icon: SupportIcon, text: "Support", href: "/support" },
  { icon: ReportsIcon, text: "Reports", href: "/reports" }
];

export default function Navbar() {
  return (
    <nav className="bg-white px-4 flex items-center justify-between h-24 border-b border-gray-300">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" width={41} height={29} />
        <Image className="ms-2" src={MeshiRewards} alt="Meshi Rewards" width={184} height={33} />
        <input
          type="text"
          placeholder="Search"
          className="ms-8 bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none"
        />
      </div>

      {/* Nav Items */}
      <div className="flex items-center">
        <div className="flex items-center space-x-1">
          {navItems.map((item, index) => (
            <NavItem key={index} icon={item.icon} text={item.text} href={item.href} />
          ))}

        </div>
        <Image src={NotificationIcon} alt="Notification Icon" width={45} height={45} className="ms-10" />
      </div>
    </nav>
  );
}

const NavItem = ({ icon, text, href }) => {
  const pathname = usePathname();
  return (
    <Link className={`flex flex-col items-center justify-center text-black h-24 px-3 ${pathname === href ? 'bg-neutral-100 border-b-8 border-sky-600 rounded-b-lg' : ''}`} href={href}>

      <Image src={icon} alt={text} width={24} height={24} />
      <span className="text-xs">{text}</span>

    </Link>
  );
};
