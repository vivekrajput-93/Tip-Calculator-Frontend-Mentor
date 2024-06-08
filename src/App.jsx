import React from "react";
import logo from "./images/logo.svg";
import dollar from "./images/icon-dollar.svg";
import person from "./images/icon-person.svg";

const App = () => {
  return (
    <div className=" w-full h-screen flex flex-col gap-10 justify-center items-center bg-lightgrayishCyan">
      <div className="flex flex-col gap-2 ">
        <img src={logo} alt="logo" />
      </div>
      <div className=" rounded-xl w-[940px] h-[400px] bg-white flex shadow-lg shadow-cyan-200">
        <div className=" flex-1 m-6 rounded-xl">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-gray-500">Bill</h4>
            <div className="flex justify-between p-1 bg-veryLightGrayishCyan px-3">
              <img src={dollar} alt="dollar" className="object-contain" />
              <input
                type="text"
                placeholder="0"
                className="outline-none w-5 bg-veryLightGrayishCyan text-veryDarkCyan font-semibold "
              />
            </div>
          </div>
          <div className="mt-10">
            <h4 className="font-semibold text-gray-500">Select Tip %</h4>
            <div className="tip-percentage"> 
              <span>5%</span>
              <span>10%</span>
              <span>15%</span>
              <span>25%</span>
              <span>50%</span>
              <input type="text" placeholder="custom" className="w-[134px] outline-none border text-gray-500 text-center font-semibold rounded-lg bg-veryLightGrayishCyan" />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-10">
            <h4 className="font-semibold text-gray-500 mb-2">Number of people</h4>
            <div className="flex justify-between p-1 bg-veryLightGrayishCyan px-3">
              <img src={person} alt="dollar" className="object-contain" />
              <input
                type="text"
                placeholder="0"
                className="outline-none w-5 bg-veryLightGrayishCyan text-veryDarkCyan font-semibold "
              />
            </div>
          </div>
        </div>
        <div className="border flex-1 m-6 rounded-xl">phase-2</div>
      </div>
    </div>
  );
};

export default App;
