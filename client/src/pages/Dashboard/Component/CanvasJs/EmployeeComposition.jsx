/* EmployeeComposition.js */
import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const EmployeeComposition = () => {
  const options = {
    animationEnabled: true,
    title: {
      text: "Customer Satisfaction",
    },
    data: [
      {
        type: "doughnut",
        
        showInLegend: true,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###'%'",
        dataPoints: [
          { name: "Unsatisfied", y: 5 },
          { name: "Very Unsatisfied", y: 31 },
          { name: "Very Satisfied", y: 40 },
          { name: "Satisfied", y: 17 },
          { name: "Neutral", y: 7 },
        ],
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default EmployeeComposition;
