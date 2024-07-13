import React, { useState, useEffect, useMemo } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register the components
Chart.register(ArcElement, Tooltip, Legend);

const initialData = [
  {
    label: "Male",
    value: 65,
    color: "#FF6384",
  },
  {
    label: "Female",
    value: 35,
    color: "#36A2EB",
  },
];

function EmployeeComposition() {
  const optimizationData = useMemo(() => initialData, []);

  const [data, setData] = useState(optimizationData);

  return (
    <>
      <Doughnut
        data={{
          labels: data.map((item) => item.label),
          datasets: [
            {
              data: data.map((item) => item.value),
              backgroundColor: data.map((item) => item.color),
            },
          ],
        }}
      />
    </>
  );
}

export default EmployeeComposition;
