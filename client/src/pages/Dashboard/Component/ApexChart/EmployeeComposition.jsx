import ReactApexChart from "react-apexcharts";

export const generateEmployeeComposition = () => {
  return {
    series: [35, 65],
    options: {
      chart: {
        type: "pie",
        width: 50,
      },
      labels: ["Female", "Male"],
      colors: ["#5932ea", "rgb(22, 192, 152)"],
      legend: {
        position: "right",
        offsetX: -10,
      },
      plotOptions: {
        pie: {
          donut: {
            size: 150,
          },
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
};

export const EmployeeCompositionCharts = ({ employeeComposition }) => {
  return (
    <div>
      <ReactApexChart
        options={employeeComposition.options}
        series={employeeComposition.series}
        type="pie"
        height={350}
      />
    </div>
  );
};
