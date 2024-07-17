import React, { useState, useEffect } from "react";
import { Plus, ChevronRight, ChevronLeft, Check } from "lucide-react";
import Layout from "./../../component/Layout/Layout";
import Card from "../Schedule/Component/Card";

const daysOfWeek = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

const startDate = new Date("2024-07-14");

const times = Array.from({ length: 10 }, (_, i) => `${i + 9}:00`);

const generateDates = () => {
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    dates.push(date.getDate());
  }
  return dates;
};

const renderRows = () => {
  return times.map((time, index) => (
    <tr key={index}>
      <td className="hour">{time}</td>
      {daysOfWeek.map((day, idx) => (
        <td key={idx} className="time-slot">
          {/* Add card for Sunday at 9:00 AM */}
          {day === "Sun" && time === "9:00" ? (
            <Card
              content="Rekrutmen dan Seleksi Karyawan Baru"
              additionalText="09:00 - 10:20"
              color="#E9EFFF"
              border="5px solid #5272e9"
              top="0"
              left="0"
            />
          ) : null}

          {/* Add card for Monday at 10:00 AM */}
          {day === "Tue" && time === "11:00" ? (
            <Card
              content="Pelatihan dan Pengembangan Karyawan"
              additionalText="10:30 - 11:50"
              color="#E9EFFF"
              border="5px solid #5272E9"
              top="-13px"
              left="-30px"
            />
          ) : null}

          {/* Add card for Wednesday at 11:00 AM */}
          {day === "Wed" && time === "12:00" ? (
            <Card
              content="Manajemen Kinerja Karyawan"
              additionalText="12:30 - 13:50"
              color="#E6FEFF"
              border="5px solid #24B0C9"
              top="14px"
              left="30px"
            />
          ) : null}

          {/* Add card for Friday at 2:00 PM */}
          {day === "Fri" && time === "14:00" ? (
            <Card
              content="Administrasi dan Kesejahteraan Karyawan"
              additionalText="12:30 - 13:50"
              color="#F7E6FF"
              border="5px solid #B224C9"
              top="0"
              left="0"
            />
          ) : null}
        </td>
      ))}
    </tr>
  ));
};
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
          <div className="schedule-container">
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
                <p>Add New</p>
              </button>
            </div>
          </div>
          <div className="weekly-schedule">
            <table>
              <thead>
                <tr>
                  <th className="week">Week</th>
                  {daysOfWeek.map((day, index) => (
                    <th key={index} className="day">
                      {generateDates()[index]}
                      <br />
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>{renderRows()}
              </tbody>
            </table>
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
            <div className="container-detail">
              <ul>
                <li>
                  <span className="check-1">
                    <Check strokeWidth={3} />
                  </span>
                  <p>menyelesaikan masalah keluhan karyawan</p>
                </li>
                <li>
                  <span className="check-2">
                    <Check strokeWidth={3} />
                  </span>
                  <p>
                    Mengembangkan rencana tindakan untuk peningkatan kinerja
                  </p>
                </li>
                <li>
                  <span className="check-3">
                    <Check strokeWidth={3} />
                  </span>
                  <p>Memeriksa dan memperbarui data karyawan dalam sistem HR</p>
                </li>
                <li>
                  <span className="check-4">
                    <Check strokeWidth={3} />
                  </span>
                  <p>Mengadakan wawancara dan tes kemampuan</p>
                </li>
                <li>
                  <span className="check-5">
                    <Check strokeWidth={3} />
                  </span>
                  <p>Merancang dan menyusun materi pelatihan</p>
                </li>
                <li>
                  <span className="check-6">
                    <Check strokeWidth={3} />
                  </span>
                  <p>
                    Menangani permintaan cuti, izin, dan administrasi lainnya
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
