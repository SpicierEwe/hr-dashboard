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
  return (
    <div>
      <BarChart
        width={950}
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
    </div>
  );
}

export default CustomBarChart;
