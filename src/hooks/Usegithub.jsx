import React from "react";
import { useState } from "react";
import Card from "./Card";

function Usegithub() {
  const [input, setInput] = useState("");
  const [datas, setDatas] = useState({});
  const [show, setShow] = useState(false);

  const dataInfo = async (e) => {
    e.preventDefault();
    const res = await fetch(`https://api.github.com/users/${input}`);
    const data = await res.json();
    console.log(data);
    setDatas(data);
    if (data) {
      setShow(true);
    } else {
      setShow(false); // User not found
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 transition-all duration-700">
      <div className="flex justify-center items-center mt-16">
        <form
          onSubmit={dataInfo}
          className="flex flex-row gap-4 bg-blue-950/70 p-8 rounded-2xl shadow-xl shadow-blue-900 backdrop-blur-md"
        >
          <input
            type="text"
            className="bg-blue-700/80 py-3 px-4 text-2xl w-[400px] text-white rounded-xl outline-none transition-all duration-300 focus:ring-4 focus:ring-blue-400 placeholder:text-blue-200"
            placeholder="Enter Github username"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-700 to-blue-900 py-3 px-8 text-2xl text-white rounded-xl shadow-lg hover:scale-105 hover:bg-blue-800 transition-all duration-300 font-semibold"
          >
            Search
          </button>
        </form>
      </div>
      {show ? <Card data={datas} /> : null}
    </div>
  );
}

export default Usegithub;
