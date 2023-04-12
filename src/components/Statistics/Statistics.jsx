import React from "react";
import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";
import "./Statistics.css";

const Statistics = () => {
  const data = [
    {
      name: "Assigement-1",
      obtainedMark: 60,
      id: 1,
    },
    {
      name: "Assigement-2",
      obtainedMark: 58,
      id: 2,
    },
    {
      name: "Assigement-3",
      obtainedMark: 60,
      id: 3,
    },
    {
      name: "Assigement-4",
      obtainedMark: 59,
      id: 4,
    },
    {
      name: "Assigement-5",
      obtainedMark: 60,
      id: 5,
    },
    {
      name: "Assigement-6",
      obtainedMark: 60,
      id: 6,
    },
    {
      name: "Assigement-7",
      obtainedMark: 60,
      id: 7,
    },
    {
      name: "Assigement-8",
      obtainedMark: 60,
      id: 8,
    },
  ];
  return (
    <div className="container-fit">
      <div className="flex items-center justify-center mt-40">
        <AreaChart
          width={900}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area
            type="monotone"
            dataKey="obtainedMark"
            stroke="red"
            fill="blue"
          />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </AreaChart>
      </div>
    </div>
  );
};

export default Statistics;
