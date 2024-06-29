import React, { useEffect, useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { FaCalendarAlt, FaBell } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import {
  IoIosArrowDown,
  IoIosPeople,
  IoIosSettings,
  IoMdSearch,
} from "react-icons/io";
import { IoHeadset, IoPeople, IoPersonCircleSharp } from "react-icons/io5";
import { TbMessageDots } from "react-icons/tb";
import { Link } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    icon: <BiSolidDashboard />,
    label: "Overview",
    notifications: 0,
    redirect: "/",
  },
  {
    id: 2,
    icon: <IoPersonCircleSharp />,
    label: "Enrollment",
    notifications: 0,
    redirect: "/courses",
  },
  {
    id: 3,
    icon: <IoIosPeople size={25} />,
    label: "Employees",
    notifications: 2,
    redirect: "/schedule",
  },
  {
    id: 4,
    icon: <FaCalendarAlt size={21} />,
    label: "Calendar and Todos",
    notifications: 0,
    redirect: "/discussion",
  },
  {
    id: 5,
    icon: <IoIosSettings />,
    label: "Job",
    notifications: 0,
    redirect: "/leaderboard",
  },
  {
    id: 6,
    icon: <IoPeople />,
    label: "Candidate",
    notifications: 0,
    redirect: "/settings",
  },
];

const menu2 = [
  {
    id: 7,
    icon: <IoHeadset />,
    label: "Help & Center",
    notifications: 0,
    redirect: "/help-and-support",
  },
  {
    id: 8,
    icon: <IoIosSettings />,
    label: "Settings",
    notifications: 0,
    redirect: "/settings",
  },
];

function SideNav() {
  const [selectedNavIndex, setSelectedNavIndex] = useState(1);

  return (
    <div className="fixed z-[99999]">
      {/* top nav */}
      <TopNavBar />

      {/* side nav */}
      <ul className="flex flex-col fixed gap-3 h-screen justify-between z-[999] bg-primary">
        <div className="flex flex-col gap-3">
          {/* LOGO images */}
          <div className="pt-1  xl:px-3 xl:pt-1.5 flex items-center gap-2">
            {/* mobile */}
            <img src="/logo/logo.svg" alt="" className="" />
            <h1 className="hidden font-semibold text-2xl xl:block">human.X</h1>
          </div>

          {/*  */}
          <div className="h-[.3px] bg-gray-200 w-full "></div>
          <h2 className="text-start hidden pl-3 text-sm lg:block mt-5 text-[#b8c3e1]">
            MAIN MENU
          </h2>
          <div className="mt-2">
            {menuItems.map((item) => {
              const isSelected = selectedNavIndex === item.id;
              return (
                <Link to={item.redirect} key={item.id}>
                  <li
                    className={`p-3 border-r-2 ${
                      isSelected
                        ? "border-accent bg-accent_light"
                        : "border-primary"
                    } text-md cursor-pointer w-full transition-all duration-200 ease-in-out`}
                    onClick={() => setSelectedNavIndex(item.id)}
                  >
                    <div className="flex justify-between gap-10 ">
                      <div className="flex gap-4">
                        {/* item icon */}
                        <div
                          className={`text-2xl lg:text-xl ${
                            isSelected ? "text-accent" : "text-[#b8c3e1]"
                          }`}
                        >
                          {item.icon}
                        </div>

                        {/* label */}
                        <div
                          className={`hidden lg:block text-sm ${
                            isSelected
                              ? "text-accent font-bold"
                              : "text-[#b8c3e1]"
                          }`}
                        >
                          {item.label}
                        </div>
                      </div>
                    </div>
                  </li>
                </Link>
              );
            })}
          </div>
          <div className="h-[.3px] bg-gray-200 w-full"></div>
          <h2 className="text-start hidden pl-3 text-sm lg:block mt-5 text-[#b8c3e1]">
            HELP & SUPPORT
          </h2>
          <div className="mt-2">
            {menu2.map((item) => {
              const isSelected = selectedNavIndex === item.id;
              return (
                <Link to={item.redirect} key={item.id}>
                  <li
                    className={`p-3 border-r-2 ${
                      isSelected
                        ? "border-accent bg-accent_light"
                        : "border-primary"
                    } text-md cursor-pointer w-full transition-all duration-200 ease-in-out`}
                    onClick={() => setSelectedNavIndex(item.id)}
                  >
                    <div className="flex justify-between gap-10 ">
                      <div className="flex gap-4">
                        {/* item icon */}
                        <div
                          className={`text-2xl lg:text-xl ${
                            isSelected ? "text-accent" : "text-[#b8c3e1]"
                          }`}
                        >
                          {item.icon}
                        </div>

                        {/* label */}
                        <div
                          className={`hidden lg:block text-sm ${
                            isSelected
                              ? "text-accent font-bold"
                              : "text-[#b8c3e1]"
                          }`}
                        >
                          {item.label}
                        </div>
                      </div>
                    </div>
                  </li>
                </Link>
              );
            })}
          </div>
        </div>
      </ul>
    </div>
  );
}

export default SideNav;

const TopNavBar = () => {
  const icons = [<IoMdSearch />, <TbMessageDots />, <FaBell />];
  return (
    <div className="flex  justify-end xl:justify-between w-full  bg-primary fixed max-w-screen-2xl p-2 xl:py-[.7rem] py-[.875rem] border-b-[.5px] border-gray-200 xl:px-10 ">
      <div className="flex justify-between xl:w-full items-center xl:ml-56  ">
        {/* search  box */}
        <label className="px-5 rounded-xl hidden input input-bordered bg-accent_light xl:flex items-center gap-2">
          <FiSearch size={25} className="text-accent" />

          <input
            type="text"
            placeholder="Search...."
            className="p-3 grow w-[30rem] bg-transparent focus-visible:
            outline-none focus:outline-none focus:ring-0 focus:border-0"
          />
        </label>

        <div className="flex">
          {/* icons */}
          <div className="flex gap-3">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="flex justify-end p-2  text-accent bg-accent_light rounded-lg text-md xl:text-2xl"
              >
                {icon}
              </div>
            ))}
          </div>
          <div className="flex lg:py-2 lg:px-3 ml-3 rounded-xl items-center gap-4  bg-accent_light">
            <div className=" w-7 h-7  aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="aspect-square rounded-full"
              />
            </div>
            <h2 className="hidden xl:block">Theresa Webb</h2>

            <div className="hidden xl:block">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
