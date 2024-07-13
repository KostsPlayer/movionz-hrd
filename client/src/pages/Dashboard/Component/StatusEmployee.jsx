import React, { useMemo, useState } from "react";
import imageUser from "./../../../assets/images/hand-drawn-flat-profile-icon2.png";

function StatusEmployee() {
  const initialData = [
    {
      name: "M. Rafli",
      department: "Marketing",
      age: 22,
      disipline: 100,
      status: "contract",
    },
    {
      name: "Fulandi Hudza",
      department: "Finance",
      age: 30,
      disipline: 90,
      status: "permanent",
    },
    {
      name: "Gadong",
      department: "Sales",
      age: 30,
      disipline: 10,
      status: "permanent",
    },
  ];

  const [data, setData] = useState(initialData);

  const optimization = useMemo(() => data, []);

  return (
    <>
      <div className="headers">
        <div className="col">Name</div>
        <div className="col">Department</div>
        <div className="col">Age</div>
        <div className="col">Disipline</div>
        <div className="col">Status</div>
      </div>
      {optimization.map((item, index) => (
        <div key={index} className="bodies">
          <div className="col">
            <img src={imageUser} alt="User" />
            <span>{item.name}</span>
          </div>
          <div className="col">{item.department}</div>
          <div className="col">{item.age}</div>
          <div className="col">
            {item.disipline >= 50 && item.disipline <= 100 ? (
              <>
                <span>+</span>
                <span>{item.disipline}%</span>
              </>
            ) : (
              <>
                <span className="no-disipline">-</span>
                <span>{item.disipline}%</span>
              </>
            )}
          </div>
          <div className="col">
            {item.status === "contract" ? (
              <span className="contract">Contract</span>
            ) : (
              <span className="permanent">Permanent</span>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default StatusEmployee;
