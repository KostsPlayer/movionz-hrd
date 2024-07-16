import ReactApexChart from "react-apexcharts";

export const generateJobStatistics = () => {
  const jobApplicantData = [43, 53, 45, 73, 64, 40, 52, 77, 61, 44, 52, 67];
  const jobApplicanDataMax = [69, 72, 62, 89, 81, 63, 76, 102, 82, 67, 73, 98];

  const jobViewData = jobApplicanDataMax.map(
    (data, index) => data - jobApplicantData[index]
  );

  return {
    series: [
      {
        name: "Job Applicant",
        data: jobApplicantData,
      },
      {
        name: "Job View",
        data: jobViewData,
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 5,
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "last",
          dataLabels: {
            total: {
              // enabled: true,
              style: {
                fontSize: "13px",
                fontWeight: 900,
                color: "#f2efff",
              },
              formatter: function (val, opts) {
                const index = opts.dataPointIndex;
                return jobViewData[index] + jobApplicantData[index];
              },
            },
          },
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "right",
        offsetY: 40,
      },
      colors: ["#5932ea", "#f2efff"],
      fill: {
        opacity: 1,
      },
      dataLabels: {
        enabled: true,
        formatter: function (val, opts) {
          const seriesIndex = opts.seriesIndex;
          const dataPointIndex = opts.dataPointIndex;
          if (seriesIndex === 0) {
            // Job Applicant series
            return val;
          } else {
            // Job View series
            return val + jobApplicantData[dataPointIndex];
          }
        },
        style: {
          colors: ["#f2efff", "#5932ea"],
        },
      },
      tooltip: {
        y: {
          formatter: function (val, opts) {
            const seriesIndex = opts.seriesIndex;
            const dataPointIndex = opts.dataPointIndex;
            if (seriesIndex === 0) {
              // Job Applicant series
              return val;
            } else {
              // Job View series
              return val + jobApplicantData[dataPointIndex];
            }
          },
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
    },
  };
};

export const JobStatisticCharts = ({ jobStatistic }) => {
  return (
    <div>
      <ReactApexChart
        options={jobStatistic.options}
        series={jobStatistic.series}
        type="bar"
        height={350}
      />
    </div>
  );
};
