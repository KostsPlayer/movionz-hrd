import React, { useState, useEffect } from "react";
import { Plus, Check } from "lucide-react";
import Layout from "../../component/Layout/Layout";
import Calendar from "./Component/Calender";
import generateSchedule from "./Component/generateSchedule.json";

const startDate = new Date("2024-07-14");
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const times = Array.from({ length: 10 }, (_, i) => `${i + 9}:00`);

// Fungsi untuk mendapatkan jadwal berdasarkan hari dan waktu
const getScheduleForDayAndTime = (day, time) => {
  const daySchedule = generateSchedule.find((schedule) => schedule.day === day);
  if (!daySchedule) return "";
  const timeKey = `t${time.split(":")[0].padStart(2, "0")}`;
  return daySchedule[timeKey] || "";
};

const renderRows = () => {
  return times.map((time, index) => (
    <tr key={index}>
      <td className="hour">{time}</td>
      {daysOfWeek.map((day, idx) => (
        <td key={idx} className="time-slot">
          <div className="card">{getScheduleForDayAndTime(day, time)}</div>
        </td>
      ))}
    </tr>
  ));
};

const generateDates = (start) => {
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    return date.getDate();
  });
};

const Schedule_New = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <Layout>
      <div className="schedule">
        <div className="schedule-center">
          <div className="schedule-container">
            <h4>July, 14-20</h4>
            <div className="isi-container">
              <select className="month">
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month, idx) => (
                  <option key={idx} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <button className="tombol">
                <span>
                  <Plus size={24} strokeWidth={2} />
                </span>
                <span>Add new</span>
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
                      <span>{generateDates(startDate)[index]}</span>
                      <span>{day}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>{renderRows()}</tbody>
            </table>
          </div>
        </div>
        <div className="schedule-right">
          <Calendar
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
            daysOfWeek={daysOfWeek}
          />
          <div className="calendar-detail">
            <div className="header-detail">
              <h4>Calendar Detail</h4>
              <button className="tombol">
                <Plus size={21} />
              </button>
            </div>
            <ul className="container-detail">
              {[
                "Menyelesaikan masalah keluhan karyawan",
                "Mengembangkan rencana tindakan untuk peningkatan kinerja",
                "Memeriksa dan memperbarui data karyawan dalam sistem HR",
                "Mengadakan wawancara dan tes kemampuan",
                "Merancang dan menyusun materi pelatihan",
                "Menangani permintaan cuti, izin, dan administrasi lainnya",
              ].map((item, idx) => (
                <li key={idx}>
                  <span className={`check-${idx + 1}`}>
                    <Check strokeWidth={4} size={12} />
                  </span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Schedule_New;
