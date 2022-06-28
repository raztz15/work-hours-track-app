import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function AllHours() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://localhost:5000/hours/`);
      const newData = await result.json();
      setData(newData);
    };

    fetchData();
  }, []);
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i].totalTime;
  }

  return (
    <div className="allHours">
      <div className="backBtn">
        <button onClick={navigateHome}>Back</button>
      </div>
      <h1 id="totalHoursH1">Monthly Summary</h1>
      <table className="hours">
        <thead>
          <tr>
            <th>Date</th>
            <th>Total time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.date}</td>
              <td>{item.totalTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="totalAmount">
        <h1>Total hours is: {total}</h1>
      </div>
    </div>
  );
}

export default AllHours;
