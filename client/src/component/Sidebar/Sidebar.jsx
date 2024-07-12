import React from "react";
import {
  LayoutDashboard,
  BarChartBig,
  BookUser,
  CalendarDays,
  User,
  SquareUserRound,
  Settings,
  BriefcaseBusiness,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function Sidebar({ bodyClass }) {
  return (
    <div className={bodyClass}>
      <NavLink to={"/"} className="container">
        <span>
          <LayoutDashboard size={20} strokeWidth={1.5} />
        </span>
        <span>Dashboard</span>
      </NavLink>
      <NavLink className="container" to={"/review"}>
        <span>
          <BarChartBig size={20} strokeWidth={1.5} />
        </span>
        <span>Review</span>
      </NavLink>
      <NavLink className="container" to={"/employee"}>
        <span>
          <BookUser size={20} strokeWidth={1.5} />
        </span>
        <span>Employee</span>
      </NavLink>
      <NavLink className="container" to={"/event"}>
        <span>
          <BriefcaseBusiness size={20} strokeWidth={1.5} />
        </span>
        <span>Event</span>
      </NavLink>
      <NavLink className="container" to={"/candidate"}>
        <span>
          <SquareUserRound size={20} strokeWidth={1.5} />
        </span>
        <span>Candidate</span>
      </NavLink>
      <NavLink className="container" to={"/schedule"}>
        <span>
          <CalendarDays size={20} strokeWidth={1.5} />
        </span>
        <span>Schedule</span>
      </NavLink>
      <div className="line"></div>
      <NavLink className="container" to={"/profile"}>
        <span>
          <User size={20} strokeWidth={1.5} />
        </span>
        <span>Profile</span>
      </NavLink>
      <NavLink className="container" to={"/setting"}>
        <span>
          <Settings size={20} strokeWidth={1.5} />
        </span>
        <span>Setting</span>
      </NavLink>
    </div>
  );
}

export default Sidebar;
