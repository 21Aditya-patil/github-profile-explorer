import React, { useState } from "react";

// function Card({ data }) {
//   if (!data) return <p>No user data found</p>;

//   return (
//     <div>
//       <h1>{data.bio}</h1>
//     </div>
//   );
// }

function Card({ data }) {


  if (!data || data.message === "Not Found") {
    return <div className="w-[1000px] mx-auto p-6 bg-blue-950 text-white mt-8 rounded-2xl shadow-2xl shadow-blue-900 flex flex-row justify-center items-center">
        <p className="text-2xl font-semibold">User not found or no data yet.</p>
    </div>
    
  }

  return (
    <div className="w-[1000px] mx-auto p-6 bg-blue-950 text-white mt-8 rounded-2xl shadow-2xl shadow-blue-900 flex flex-row">
      <div>
        <img
          src={data.avatar_url}
          alt="Profile Photo"
          width={300}
          className="rounded-full shadow-2xl shadow-black"
        />
      </div>
      <div className="flex flex-col  justify-start items-start w-full">
        <div className="flex flex-col ml-6">
          <h2 className="font-bold text-4xl">{data.name}</h2>
          <h4 className="font-semibold text-lg mt-1">{data.login}</h4>
          <p className="font-medium text-base mt-6">{data.bio}</p>
        </div>
        <div className="flex flex-row gap-4 mt-14 ml-40">
          <div className="w-[110px] h-[70px] bg-blue-700 rounded-lg justify-center items-center flex flex-col">
            Repsitories
            <h1 className="text-3xl">{data.public_repos}</h1>
          </div>
          <div className="w-[110px] h-[70px] bg-blue-700 rounded-lg justify-center items-center flex flex-col">
            Followers
            <h1 className="text-3xl">{data.followers}</h1>
          </div>
          <div className="w-[110px] h-[70px] bg-blue-700 rounded-lg justify-center items-center flex flex-col">
            Following
            <h1 className="text-3xl">{data.following}</h1>
          </div>
        </div>
        <div className="flex flex-col mt-8 justify-center items-center w-full">
            <h1 className="font-bold text-2xl">📍 {data.location || 'N/A'}</h1>
            <a href={data.html_url} target="_blank" rel="noreferrer" className="px-4 py-2 bg-blue-800 rounded-lg mt-10">Visit Profile</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
