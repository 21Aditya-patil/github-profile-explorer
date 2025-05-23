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
    <div className="flex flex-col">
      <div className="flex justify-center items-center mt-10">
        <form onSubmit={dataInfo}>
          <input
            type="text"
            className="bg-blue-700 py-3 px-2 text-2xl w-[860px] text-white rounded-xl"
            placeholder="Enter Github username"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-950 py-3 px-6 text-2xl text-white rounded-xl ml-5 hover:bg-blue-900"
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
