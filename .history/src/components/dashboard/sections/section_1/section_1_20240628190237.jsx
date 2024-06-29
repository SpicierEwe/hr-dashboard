import { IoPeople } from "react-icons/io5";
import { RiArrowUpSFill } from "react-icons/ri";

function Section1() {
  const data = [
    {
      icon: <IoPeople />,
      title: "Total Employees",
      count: 15000,
      percentage: "24%",
      color: "#6835f9",
    },
    {
      icon: <IoPeople />,
      title: "New Employees",
      count: 15000,
      percentage: "24%",
      color: "#fe8c4c",
    },
    {
      icon: <IoPeople />,
      title: "Job Applicants",
      count: 15000,
      percentage: "24%",
      color: "#4cbefe",
    },
    {
      icon: <IoPeople />,
      title: "Resigned Employees",
      count: 15000,
      percentage: "24%",
      color: "#fe4c4c",
    },
  ];

  return (
    <div className="hide-scrollbar flex gap-5 overflow-x-auto hide-scroll w-full pr-20 p-5 pt-7 pl-9 xl:grid grid-cols-4 xl:pr-5">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="text-start rounded-3xl p-5 bg-primary flex flex-col items-start"
            style={{
              border: `2px ${item.color} solid`,
              // fixed height
            }}
          >
            <div
              className="text-4xl mb-4"
              style={{
                color: item.color,
              }}
            >
              {item.icon}
            </div>
            <div className=" text-md  whitespace-nowrap">{item.title}</div>
            <div className="flex flex-col md:flex-row mt-1.5 items-center">
              <p
                className="text-3xl font-bold"
                style={{
                  color: item.color,
                }}
              >
                {item.count}
              </p>
              <div className="flex gap-1 items-center mt-3 bg-[#ebf9ee] text-[#31c656] w-fit rounded-xl p-2">
                <RiArrowUpSFill />
                <p className="text-[#31c656]">{item.percentage}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Section1;
