import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/Layout/Layout";
import DisplayData from "./Component/DisplayData";
import ApexCharts from "apexcharts";
import {
  generateJobStatistics,
  JobStatisticCharts,
} from "./Component/JobStatistics";
import {
  generateEmployeeComposition,
  EmployeeCompositionCharts,
} from "./Component/EmployeeComposition";
import { SlidersHorizontal } from "lucide-react";
import StatusEmployee from "./Component/StatusEmployee";

function Dashboard() {
  const [trendingUp, setTrendingUp] = useState(true);
  const [jobStatistic, setJobStatistic] = useState(generateJobStatistics());
  const [employeeComposition, setEmployeeComposition] = useState(
    generateEmployeeComposition()
  );

  const jobStatisticRef = useRef();
  const employeeCompositionRef = useRef();

  useEffect(() => {
    if (jobStatisticRef.current) {
      const chart = new ApexCharts(jobStatisticRef.current, jobStatistic);
      chart.render();
      return () => {
        chart.destroy();
      };
    }

    if (employeeCompositionRef.current) {
      const chart = new ApexCharts(
        employeeCompositionRef.current,
        employeeComposition
      );
      chart.render();
      return () => {
        chart.destroy();
      };
    }
  }, [jobStatistic, employeeComposition]);

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
          <JobStatisticCharts jobStatistic={jobStatistic} />
        </div>
        <div className="employee-status">
          <div className="wrapper">
            <div className="title">Employee Status</div>
            <div className="filter">
              <span>Filter & Short</span>
              <span>
                <SlidersHorizontal size={15} strokeWidth={1.5} />
              </span>
            </div>
          </div>
          <StatusEmployee />
        </div>
        <div className="employee-composition">
          <EmployeeCompositionCharts
            employeeComposition={employeeComposition}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
