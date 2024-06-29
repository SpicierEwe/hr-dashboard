import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Onsite", value: 300 },
  { name: "Remote", value: 300 },
  { name: "Hybrid", value: 300 },
];

const COLORS = ["#6835f9", "#fe8c4c", "#fecc4c"];

const renderCustomizedLabel = ({ cx, cy }) => {
  return (
    <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
      <tspan x={cx} dy="-1em" fontSize="15px" fill="#afb7cf">
        Total
      </tspan>
      <tspan x={cx} dy="1.2em" fontSize="24px" fill="#000">
        2157
      </tspan>
    </text>
  );
};

export default function CustomPieChart() {
  return (
    <div>
      <PieChart width={300} height={200}>
        <Pie
          data={data}
          cx={150}
          cy={100}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      <div className="m-5 p-2 bg-accent_light">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between gap-5"
            >
              {/* c1 */}
              <div className="flex items-center gap-5">
                <div
                  className="w-4 h-4 rounded-sm"
                  style={{
                    backgroundColor: COLORS[index],
                  }}
                ></div>
                <p>{item.name}</p>
              </div>{" "}
              {/* c2 */}
              <div>
                <p>{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
