import ReactApexChart from "react-apexcharts";

export const generateEmployeeComposition = () => {
  return {
    series: [35, 65],
    options: {
      chart: {
        type: "donut",
      },
      labels: ["Female", "Male"],
      colors: ["#5932ea", "rgb(22, 192, 152)"],
      legend: {
        position: "right",
        offsetX: -2,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "45%", // Adjust this value to control the overall size of the donut
            width: "150%", // Adjust this value to control the thickness of the donut
          },
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ["#fff"],
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 1,
          opacity: 0.45,
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
        type="donut"
        height={350}
      />
    </div>
  );
};
