import React from "react";
import logo from "./../../assets/OUF8PqTIQGOfDMfu0qOWrg-removebg-preview.png";
import user from "./../../assets/images/user.png";
import { Search, Bell, EllipsisVertical } from "lucide-react";

function Topbar({ bodyClass }) {
  return (
    <div className={bodyClass}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="search">
        <button>
          <Search strokeWidth={1.5} size={20} />
        </button>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="other">
        <div className="notification">
          <Bell strokeWidth={1.5} size={20} />
          <div className="active"></div>
        </div>
        <div className="profile">
          <div className="image">
            <img src={user} alt="User" />
          </div>
          <div className="text">
            <span className="name">KostsPlayer</span>
            <span className="job">CEO</span>
          </div>
        </div>
        <EllipsisVertical strokeWidth={1.5} size={20} />
      </div>
    </div>
  );
}

export default Topbar;
