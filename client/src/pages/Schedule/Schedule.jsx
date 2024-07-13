import React, { useState, useEffect } from "react";
import { Plus, ChevronRight, ChevronLeft } from "lucide-react";
import Layout from "./../../component/Layout/Layout";

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [datesHTML, setDatesHTML] = useState("");
  const [monthYearString, setMonthYearString] = useState("");

  const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();

    const monthYearString = currentDate.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    setMonthYearString(monthYearString);

    let datesHTML = "";

    for (let i = 0; i < firstDayIndex; i++) {
      const prevDate = new Date(
        currentYear,
        currentMonth,
        i - firstDayIndex + 1
      );
      datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
    }

    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const activeClass =
        date.toDateString() === new Date().toDateString() ? "active" : "";
      datesHTML += `<div class="date ${activeClass}">${i}</div>`;
    }

    const remainingDays = (7 - ((firstDayIndex + totalDays) % 7)) % 7;

    for (let i = 1; i <= remainingDays; i++) {
      const nextDate = new Date(currentYear, currentMonth + 1, i);
      datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
    }

    setDatesHTML(datesHTML);
  };

  useEffect(() => {
    updateCalendar();
  }, [currentDate]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  return (
    <Layout>
      <div className="schedule">
        <div className="schedule-center">
          <h4>February, 14-20</h4>
          <div className="isi-container">
            <select className="month">
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <button className="tombol">
              <Plus />
              Add New
            </button>
          </div>
        </div>
        <div className="schedule-right">
          <div className="calendar">
            <div className="header">
              <button className="prevBtn" onClick={handlePrevMonth}>
                <ChevronLeft />
              </button>
              <div className="monthYear">{monthYearString}</div>
              <button className="nextBtn" onClick={handleNextMonth}>
                <ChevronRight />
              </button>
            </div>
            <div className="days">
              <div className="day">S</div>
              <div className="day">M</div>
              <div className="day">T</div>
              <div className="day">W</div>
              <div className="day">T</div>
              <div className="day">F</div>
              <div className="day">S</div>
            </div>
            <div
              className="dates"
              dangerouslySetInnerHTML={{ __html: datesHTML }}
            ></div>
          </div>
          <div className="calendar-detail">
            <div className="header-detail">
              <h4>Calendar Detail</h4>
              <button className="tombol">
                <Plus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
