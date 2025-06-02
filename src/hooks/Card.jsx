import React, { useState } from "react";

function Card({ data }) {


  if (!data || data.message === "Not Found") {
    return (
      <div className="w-[1000px] mx-auto p-6 bg-blue-950/80 text-white mt-8 rounded-2xl shadow-2xl shadow-blue-900 flex flex-row justify-center items-center animate-fadeInScale">
        <p className="text-2xl font-semibold">User not found or no data yet.</p>
      </div>
    );
  }

  return (
    <div className="w-[1000px] mx-auto p-8 bg-blue-950/90 text-white mt-12 rounded-3xl shadow-2xl shadow-blue-900 flex flex-row gap-10 animate-fadeInScale transition-all duration-700">
      <div className="flex flex-col items-center">
        <img
          src={data.avatar_url}
          alt="Profile Photo"
          width={220}
          className="rounded-full shadow-2xl shadow-black border-4 border-blue-700 transition-all duration-500 hover:scale-105"
        />
        <a
          href={data.html_url}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2 bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg mt-8 text-lg font-semibold hover:scale-105 transition-all duration-300"
        >
          Visit Profile
        </a>
      </div>
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col ml-2">
          <h2 className="font-bold text-4xl mb-1">{data.name}</h2>
          <h4 className="font-semibold text-lg text-blue-300 mb-4">@{data.login}</h4>
          <p className="font-medium text-base mt-2 text-blue-100">{data.bio}</p>
        </div>
        <div className="flex flex-row gap-8 mt-10">
          <div className="w-[120px] h-[80px] bg-blue-700/80 rounded-xl flex flex-col justify-center items-center shadow-lg">
            <span className="text-blue-200 text-sm">Repositories</span>
            <h1 className="text-3xl font-bold">{data.public_repos}</h1>
          </div>
          <div className="w-[120px] h-[80px] bg-blue-700/80 rounded-xl flex flex-col justify-center items-center shadow-lg">
            <span className="text-blue-200 text-sm">Followers</span>
            <h1 className="text-3xl font-bold">{data.followers}</h1>
          </div>
          <div className="w-[120px] h-[80px] bg-blue-700/80 rounded-xl flex flex-col justify-center items-center shadow-lg">
            <span className="text-blue-200 text-sm">Following</span>
            <h1 className="text-3xl font-bold">{data.following}</h1>
          </div>
        </div>
        <div className="flex flex-col mt-8 justify-center items-start w-full">
          <h1 className="font-bold text-2xl">📍 {data.location || 'N/A'}</h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
