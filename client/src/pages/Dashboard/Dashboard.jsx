import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/Layout/Layout";
import DisplayData from "./Component/DisplayData";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts";

const ApexChart = ({ jobStatistic }) => {
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

function Dashboard() {
  const [trendingUp, setTrendingUp] = useState(true);

  const generateJobStatistics = () => {
    const jobApplicantData = [13, 23, 20, 8, 13, 27, 41, 77, 61, 24, 51, 49];
    const jobApplicanDataMax = [25, 31, 28, 15, 21, 37, 45, 98, 72, 31, 63, 68];

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

  const [jobStatistic, setJobStatistic] = useState(generateJobStatistics());

  const jobStatisticRef = useRef();

  useEffect(() => {
    if (jobStatisticRef.current) {
      const chart = new ApexCharts(jobStatisticRef.current, jobStatistic);
      chart.render();
      return () => {
        chart.destroy();
      };
    }
  }, [jobStatistic]);

  return (
    <Layout>
      <div className="dashboard">
        <div className="display-data">
          <DisplayData
            title={"Total Employees"}
            percentage={"10%"}
            amount={"856"}
            note={"Employee"}
            isTrendingUp={trendingUp}
          />
          <DisplayData
            title={"Job View"}
            percentage={"22%"}
            amount={"3,342"}
            note={"Viewers"}
            isTrendingUp={trendingUp}
          />
          <DisplayData
            title={"Job Applied"}
            percentage={"12%"}
            amount={"77"}
            note={"Applicants"}
            isTrendingUp={trendingUp}
          />
          <DisplayData
            title={"Resign Employees"}
            percentage={"7%"}
            amount={"17"}
            note={"Employee"}
            isTrendingUp={!trendingUp}
          />
        </div>
        <div className="job-statistic">
          <ApexChart jobStatistic={jobStatistic} />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
