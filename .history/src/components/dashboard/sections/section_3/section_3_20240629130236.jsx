import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import CustomBarChart from "../sections_2/charts/bar_chart";
import CustomPieChart from "../sections_2/charts/pie_chart";

export default function Section3() {
  return (
    <div className="flex flex-col xl:flex-row  gap-10 mt-7 justify-between ">
      {/* bar stats */}
      <div className="bg-primary p-2 rounded-2xl w-full ">
        <div className="flex flex-col lg:flex-row w-fit lg:w-full gap-3 lg:justify-between p-5">
          <h2 className="font-bold">Enrollement Statistics</h2>
          <button className="btn flex justify-between items-center gap-2 bg-accent_light p-1 px-2 rounded-lg w-fit">
            Week
            <RiArrowDropDownLine size={25} />
          </button>
        </div>

        <div className="overflow-auto hide-scrollbar">
          <CustomBarChart isEnrolmentStats={true} />
        </div>
      </div>

      {/* =================== 
      Pie Chart
        =========================*/}
      <div className="bg-primary w-fit rounded-xl">
        <div className="flex flex-col lg:flex-row  gap-3 lg:justify-between p-5 text-start lg:items-center ">
          <h2 className="font-bold">Working Format</h2>
          <button className=" flex justify-between items-center gap-2 bg-accent_light p-1 px-2 rounded-lg w-fit">
            Today
            <RiArrowDropDownLine size={25} />
          </button>
        </div>

        <div className="relative"></div>
      </div>
    </div>
  );
}