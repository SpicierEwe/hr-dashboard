import Section1 from "./sections/section_1/section_1";
import Section2 from "./sections/sections_2/section_2";
import Section3 from "./sections/section_3/section_3";

function DashBoard() {
  return (
    <div className="lg:mr-14">
      <div className=" ">
        <Section1 />
      </div>

      <div className="pl-[5rem] lg:pl-[11rem] ">
        {<Section2 />}
        {<Section3 />}
      </div>
    </div>
  );
}

export default DashBoard;
