"use client";
import React from "react";
import { onSubmit } from "./counter";

const Clicker = () => {
  return (
    <div className="container-xl flex justify-center items-center h-screen bg-[#161616] text-white flex-col">
      <div className="border-[1.5px] border-[#303030] p-5 text-center flex w-[30%] gap-2 justify-center rounded-t-xl rounded-b-sm text-[22px]">
        <div
          id="mil-box"
          className=" bg-[#262626] p-[2px] mil-box rounded-md flex flex-col h-[55px] overflow-hidden gap-1"
        >
          <div className=" border-[1px] shadow-lg  zero  shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            0
          </div>
          <div className="border-[1px] shadow-lg shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            1
          </div>
          <div className="border-[1px] shadow-lg  two shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            2
          </div>
          <div className="border-[1px] shadow-lg three shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            3
          </div>
          <div className="border-[1px] shadow-lg four  shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            4
          </div>
          <div className="border-[1px] shadow-lg five shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            5
          </div>
          <div className="border-[1px] shadow-lg  six shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            6
          </div>
          <div className="border-[1px] shadow-lg seven shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            7
          </div>
          <div className="border-[1px] shadow-lg eight  shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            8
          </div>
          <div className="border-[1px] shadow-lg nine shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            9
          </div>
        </div>
        <div
          id="hundredk-box"
          className=" bg-[#262626] p-[2px] mil-box rounded-md flex flex-col h-[55px] overflow-hidden gap-1"
        >
          <div className=" border-[1px] shadow-lg  zero  shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            0
          </div>
          <div className="border-[1px] shadow-lg shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            1
          </div>
          <div className="border-[1px] shadow-lg  two shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            2
          </div>
          <div className="border-[1px] shadow-lg three shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            3
          </div>
          <div className="border-[1px] shadow-lg four  shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            4
          </div>
          <div className="border-[1px] shadow-lg five shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            5
          </div>
          <div className="border-[1px] shadow-lg  six shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            6
          </div>
          <div className="border-[1px] shadow-lg seven shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            7
          </div>
          <div className="border-[1px] shadow-lg eight  shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            8
          </div>
          <div className="border-[1px] shadow-lg nine shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            9
          </div>
        </div>
        <div
          id="tenk-box"
          className=" bg-[#262626] p-[2px] mil-box rounded-md flex flex-col h-[55px] overflow-hidden gap-1"
        >
          <div className=" border-[1px] shadow-lg  zero  shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            0
          </div>
          <div className="border-[1px] shadow-lg shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            1
          </div>
          <div className="border-[1px] shadow-lg  two shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            2
          </div>
          <div className="border-[1px] shadow-lg three shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            3
          </div>
          <div className="border-[1px] shadow-lg four  shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            4
          </div>
          <div className="border-[1px] shadow-lg five shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            5
          </div>
          <div className="border-[1px] shadow-lg  six shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            6
          </div>
          <div className="border-[1px] shadow-lg seven shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            7
          </div>
          <div className="border-[1px] shadow-lg eight  shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            8
          </div>
          <div className="border-[1px] shadow-lg nine shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            9
          </div>
        </div>
        <div
          id="k-box"
          className=" bg-[#262626] p-[2px] mil-box rounded-md flex flex-col h-[55px] overflow-hidden gap-1"
        >
          <div className=" border-[1px] shadow-lg  zero  shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            0
          </div>
          <div className="border-[1px] shadow-lg shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            1
          </div>
          <div className="border-[1px] shadow-lg  two shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            2
          </div>
          <div className="border-[1px] shadow-lg three shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            3
          </div>
          <div className="border-[1px] shadow-lg four  shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            4
          </div>
          <div className="border-[1px] shadow-lg five shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            5
          </div>
          <div className="border-[1px] shadow-lg  six shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            6
          </div>
          <div className="border-[1px] shadow-lg seven shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            7
          </div>
          <div className="border-[1px] shadow-lg eight  shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            8
          </div>
          <div className="border-[1px] shadow-lg nine shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            9
          </div>
        </div>
        <div
          id="hundreds-box"
          className=" bg-[#262626] p-[2px] mil-box rounded-md flex flex-col h-[55px] overflow-hidden gap-1"
        >
          <div className=" border-[1px] shadow-lg  zero  shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            0
          </div>
          <div className="border-[1px] shadow-lg shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            1
          </div>
          <div className="border-[1px] shadow-lg  two shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            2
          </div>
          <div className="border-[1px] shadow-lg three shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            3
          </div>
          <div className="border-[1px] shadow-lg four  shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            4
          </div>
          <div className="border-[1px] shadow-lg five shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            5
          </div>
          <div className="border-[1px] shadow-lg  six shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            6
          </div>
          <div className="border-[1px] shadow-lg seven shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            7
          </div>
          <div className="border-[1px] shadow-lg eight  shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            8
          </div>
          <div className="border-[1px] shadow-lg nine shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            9
          </div>
        </div>
        <div
          id="tens-box"
          className=" bg-[#262626] p-[2px] mil-box rounded-md flex flex-col h-[55px] overflow-hidden gap-1"
        >
          <div className=" border-[1px] shadow-lg  zero  shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            0
          </div>
          <div className="border-[1px] shadow-lg shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            1
          </div>
          <div className="border-[1px] shadow-lg  two shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            2
          </div>
          <div className="border-[1px] shadow-lg three shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            3
          </div>
          <div className="border-[1px] shadow-lg four  shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            4
          </div>
          <div className="border-[1px] shadow-lg five shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            5
          </div>
          <div className="border-[1px] shadow-lg  six shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            6
          </div>
          <div className="border-[1px] shadow-lg seven shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            7
          </div>
          <div className="border-[1px] shadow-lg eight  shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            8
          </div>
          <div className="border-[1px] shadow-lg nine shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            9
          </div>
        </div>
        <div
          id="ones-box"
          className=" bg-[#262626] p-[2px] mil-box rounded-md flex flex-col h-[55px] overflow-hidden gap-1"
        >
          <div className=" border-[1px] shadow-lg  zero  shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            0
          </div>
          <div className="border-[1px] shadow-lg shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            1
          </div>
          <div className="border-[1px] shadow-lg  two shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            2
          </div>
          <div className="border-[1px] shadow-lg three shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            3
          </div>
          <div className="border-[1px] shadow-lg four  shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            4
          </div>
          <div className="border-[1px] shadow-lg five shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            5
          </div>
          <div className="border-[1px] shadow-lg  six shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            6
          </div>
          <div className="border-[1px] shadow-lg seven shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            7
          </div>
          <div className="border-[1px] shadow-lg eight  shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            8
          </div>
          <div className="border-[1px] shadow-lg nine shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            9
          </div>
        </div>
      </div>

      <button
        className="bg-[#3b3b3b] w-[30%] mt-1 p-2 text-[22px] rounded-t-sm rounded-b-xl"
        onClick={onSubmit}
      >
        +1
      </button>
    </div>
  );
};

export default Clicker;
