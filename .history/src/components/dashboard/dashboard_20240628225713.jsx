import Section1 from "./sections/section_1/section_1";
import Section2 from "./sections/sections_2/section_2";

function DashBoard() {
  return (
    <div>
      <Section1 />
      <div className="">
        <Section2 />
      </div>
    </div>
  );
}

export default DashBoard;
