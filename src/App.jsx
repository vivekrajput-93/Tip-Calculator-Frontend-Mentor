import React, { useState } from "react";
import logo from "./images/logo.svg";
import dollar from "./images/icon-dollar.svg";
import person from "./images/icon-person.svg";

const App = () => {
  const [billVal, setBillVal] = useState(0);
  const [tipVal, setTipVal] = useState(0.05);
  const [peopleVal, setPeopleVal] = useState(1);
  const [customTip, setCustomTip] = useState("");
  const[error, setError] = useState("")

  const handleBillChange = (e) => {
    let value = e.target.value.replace(',', '.');
    setBillVal(parseFloat(value));
  };


  const handleTipButtonClick = (value) => {
    try {
      setTipVal(value / 100);
      setCustomTip("");
    } catch (error) {
      console.log(error);
      console.log("Somethin went at tip percentage");
    }
  };

  const handleCustomTipChange = (e) => {
    setCustomTip(e.target.value);
    setTipVal(parseFloat(e.target.value) / 100);
  };


  const handlePeopleChange = (e) => {
    let value = parseFloat(e.target.value);
    if (value <= 0) {
      setError('Number must be greater than zero');
      setTimeout(() => {
        setError('');
      }, 2000);
    } else {
      setPeopleVal(value);
    }
  };

  const calculateTip = () => {
    if(peopleVal >= 1) {
      let tip = (billVal * tipVal ) / peopleVal;
      let totalAmount  = (billVal * (tipVal + 1)) / 100;
      return {
        tipAmount: tip.toFixed(2),
        totalAmount: totalAmount.toFixed(2),
      };
    }
    return {
      tipAmount: '0.00',
      totalAmount: '0.00',
    };
  }

  const { tipAmount, totalAmount } = calculateTip();

  const handleReset = () => {
    setBillVal(0);
    setPeopleVal(1);
    setTipVal(0.15);
    setCustomTip('');
  };


  return (
    <div className=" w-full h-screen flex flex-col gap-10 justify-center items-center bg-lightgrayishCyan max-[924px]:h-fit">
      <div className="flex flex-col gap-2 max-[924px]:mt-4 ">
        <img src={logo} alt="logo" />
      </div>
      <div className=" rounded-xl w-[940px] h-[400px] bg-white flex shadow-lg shadow-cyan-200  max-[924px]:flex-col max-[924px]:w-fit max-[924px]:h-fit max-[924px]:m-5">
        <div className=" flex-1 m-6 rounded-xl ">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-gray-500">Bill</h4>
            <div className="flex justify-between p-1 bg-veryLightGrayishCyan px-3">
              <img src={dollar} alt="dollar" className="object-contain" />
              <input
                type="number"
                placeholder="0"
                value={billVal}
                onChange={handleBillChange}
                className="outline-none w-10 bg-veryLightGrayishCyan text-veryDarkCyan font-semibold "
              />
            </div>
          </div>
          <div className="mt-10">
            <h4 className="font-semibold text-gray-500">Select Tip %</h4>
            <div className="tip-percentage">
              {[5, 10, 15, 25, 50].map((value) => (
                <button
                  key={value}
                  className={`btn ${tipVal === value / 100 ? "active" : ""}`}
                  onClick={() => handleTipButtonClick(value)}
                >
                  {value}%
                </button>
              ))}
              <input
                type="text"
                placeholder="custom"
                className="w-[130px] outline-none border text-gray-500 text-center font-semibold rounded-lg bg-veryLightGrayishCyan"
                value={customTip}
                onChange={handleCustomTipChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-10">
            <h4 className="font-semibold text-gray-500 mb-2">
              Number of people
            </h4>
            <div className="flex justify-between p-1 bg-veryLightGrayishCyan px-3">
              <img src={person} alt="dollar" className="object-contain" />
              <input
                type="number"
                placeholder="0"
                value={peopleVal}
                onChange={handlePeopleChange}
                className="outline-none w-10 bg-veryLightGrayishCyan text-veryDarkCyan font-semibold "
              />
            </div>
          </div>
        </div>
        <div className="shadow-md flex-1 m-6 rounded-xl  bg-veryDarkCyan p-4 flex flex-col gap-y-16 amount-container">
          <div>
            <div className="">
              <h3>Tip Amount</h3>
              <p>/ person</p>
            </div>
            <h4>${tipAmount}</h4>
          </div>
          <div>
            <div>
              <h3>Total</h3>
              <p>/ person</p>
            </div>
            <h4>${totalAmount}</h4>
          </div>
          <button onClick={handleReset} className="px-2 uppercase font-semibold text-veryDarkCyan py-2 rounded-lg bg-customColor">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
