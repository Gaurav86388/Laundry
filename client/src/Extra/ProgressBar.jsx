import React from "react";
import "./ProgressBar.css";

const progressArray = [
  {
    circle: "first",
    circleText: "Picked up",
  },
  {
    circle: "second",
    circleText: "Washed",
  },
  {
    circle: "third",
    circleText: "Ironed",
  },
  {
    circle: "fourth",
    circleText: "Delivered",
  },
];

const ProgressBar = () => {
  return (<div className="progress-bar">

        <ul type="none">
                        {progressArray.map((item, index)=>{
                            return <li key={index} className="progress-list"> 
                                <div className={`circle ${item.circle}`}></div>
                                <p>{item.circleText}</p>
                                <div className={index===progressArray.length-1 ? "": "progress-bar-line"}></div>
                            </li>
                })}
        </ul>
       
      </div>

  );
};

export default ProgressBar;
