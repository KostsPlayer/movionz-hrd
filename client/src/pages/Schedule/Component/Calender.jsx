import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Calendar = ({ currentDate, setCurrentDate, daysOfWeek }) => {
  const [dates, setDates] = useState([]);
  const [monthString, setMonthString] = useState("");

  useEffect(() => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const today = new Date();

    setMonthString(
      currentDate.toLocaleString("default", { month: "long" })
    );

    // setMonthYearString(
    //   currentDate.toLocaleString("default", { month: "long", year: "numeric" })
    // );

    const datesArray = [];
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Add empty dates for days before the first of the month
    for (let i = 0; i < firstDay; i++) {
      datesArray.push({ date: "", inactive: true });
    }

    // Add dates for the current month
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const isPast =
        date < today && date.toDateString() !== today.toDateString();
      const isActive = date.toDateString() === today.toDateString();
      datesArray.push({ date: i, isPast, isActive });
    }

    setDates(datesArray);
  }, [currentDate]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  return (
    <div className="calendar">
      <div className="header">
        <button className="prevBtn" onClick={handlePrevMonth}>
          <ChevronLeft size={24} />
        </button>
        <div className="monthYear">{monthString}</div>
        <button className="nextBtn" onClick={handleNextMonth}>
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="days">
        {daysOfWeek.map((day, idx) => (
          <div key={idx} className="day">
            {day[0]}
          </div>
        ))}
      </div>
      <div className="dates">
        {dates.map((dateObj, idx) => (
          <div
            key={idx}
            className={`date ${dateObj.isActive ? "active" : ""} ${
              dateObj.isPast ? "inactive" : ""
            }`}
          >
            {dateObj.date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
