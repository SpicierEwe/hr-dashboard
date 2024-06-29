import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function CustomBarChart() {
  const data = [
    { name: "MON", UIUX: 20, BA: 40, Finance: 30, PM: 10 },
    { name: "TUE", UIUX: 30, BA: 5, Finance: 30, PM: 10 },
    { name: "WED", UIUX: 20, BA: 40, Finance: 30, PM: 10 },
    { name: "THU", UIUX: 20, BA: 40, Finance: 30, PM: 10 },
    { name: "FRI", UIUX: 20, BA: 40, Finance: 30, PM: 10 },
    { name: "SAT", UIUX: 20, BA: 40, Finance: 30, PM: 10 },
  ];

  const formatPercent = (tick) => `${tick}%`;
  return (
    <BarChart
      width={350}
      height={300}
      data={data}
      margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
      barCategoryGap={20}
    >
      <Legend />
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="name" />
      <YAxis domain={[0, 100]} tickFormatter={formatPercent} />

      <Tooltip />
      <Bar
        dataKey="UIUX"
        stackId="a"
        fill="#6835f9"
        radius={[10, 10, 10, 10]}
        barSize={13} // Adjust bar size to create spacing effect
      />
      <Bar
        dataKey="BA"
        stackId="a"
        fill="#fe8c4c"
        radius={[10, 10, 10, 10]}
        barSize={13} // Adjust bar size to create spacing effect
      />
      <Bar
        dataKey="Finance"
        stackId="a"
        fill="#FFC107"
        radius={[10, 10, 10, 10]}
        barSize={13} // Adjust bar size to create spacing effect
      />
      <Bar
        dataKey="PM"
        stackId="a"
        radius={[10, 10, 10, 10]}
        fill="#2998FF"
        barSize={13} // Adjust bar size to create spacing effect
      />
    </BarChart>
  );
}

export default CustomBarChart;
