"use client";
import React, { useEffect } from "react";
import { onSubmit, snowFall } from "./counter";

const Clicker = () => {
  useEffect(() => {
    snowFall();
  });
  return (
    <div className="container-xl p-3 flex overflow-hidden justify-center items-center h-screen bg-[#161616] text-white flex-col">
      <div
        id="snow-box"
        className=" overflow-hidden pointer-events-none w-full h-full absolute"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          id="snow"
          y="0px"
          width="15"
          height="15"
          viewBox="0 0 26 26"
          className="fill-current text-white pointer-events-none  absolute snow "
        >
          <path d="M 12.90625 -0.03125 C 12.863281 -0.0234375 12.820313 -0.0117188 12.78125 0 C 12.316406 0.105469 11.988281 0.523438 12 1 L 12 3.5625 L 10.71875 2.28125 C 10.511719 2.058594 10.210938 1.945313 9.90625 1.96875 C 9.863281 1.976563 9.820313 1.988281 9.78125 2 C 9.40625 2.066406 9.105469 2.339844 9 2.703125 C 8.894531 3.070313 9.003906 3.460938 9.28125 3.71875 L 11.5625 6 L 9.875 7.6875 L 7.65625 8.28125 L 6.8125 5.15625 C 6.710938 4.703125 6.308594 4.378906 5.84375 4.375 C 5.8125 4.375 5.78125 4.375 5.75 4.375 C 5.449219 4.398438 5.175781 4.558594 5.007813 4.808594 C 4.839844 5.054688 4.789063 5.367188 4.875 5.65625 L 5.34375 7.4375 L 3.09375 6.125 C 2.894531 6.007813 2.664063 5.964844 2.4375 6 C 2.003906 6.054688 1.660156 6.382813 1.578125 6.8125 C 1.5 7.242188 1.710938 7.671875 2.09375 7.875 L 4.3125 9.15625 L 2.59375 9.625 C 2.058594 9.761719 1.738281 10.308594 1.875 10.84375 C 2.011719 11.378906 2.558594 11.699219 3.09375 11.5625 L 6.21875 10.71875 L 6.84375 13 L 6.25 15.28125 L 3.09375 14.4375 C 2.960938 14.398438 2.824219 14.390625 2.6875 14.40625 C 2.203125 14.464844 1.835938 14.863281 1.8125 15.351563 C 1.789063 15.835938 2.117188 16.269531 2.59375 16.375 L 4.3125 16.84375 L 2.09375 18.125 C 1.609375 18.402344 1.441406 19.015625 1.71875 19.5 C 1.996094 19.984375 2.609375 20.152344 3.09375 19.875 L 5.34375 18.5625 L 4.875 20.34375 C 4.738281 20.878906 5.058594 21.425781 5.59375 21.5625 C 6.128906 21.699219 6.675781 21.378906 6.8125 20.84375 L 7.65625 17.71875 L 9.875 18.3125 L 11.5625 20 L 9.28125 22.28125 C 8.882813 22.679688 8.882813 23.320313 9.28125 23.71875 C 9.679688 24.117188 10.320313 24.117188 10.71875 23.71875 L 12 22.4375 L 12 25 C 11.996094 25.359375 12.183594 25.695313 12.496094 25.878906 C 12.808594 26.058594 13.191406 26.058594 13.503906 25.878906 C 13.816406 25.695313 14.003906 25.359375 14 25 L 14 22.4375 L 15.28125 23.71875 C 15.679688 24.117188 16.320313 24.117188 16.71875 23.71875 C 17.117188 23.320313 17.117188 22.679688 16.71875 22.28125 L 14.4375 20 L 16.125 18.3125 L 18.34375 17.71875 L 19.1875 20.84375 C 19.324219 21.378906 19.871094 21.699219 20.40625 21.5625 C 20.941406 21.425781 21.261719 20.878906 21.125 20.34375 L 20.65625 18.5625 L 22.90625 19.875 C 23.390625 20.152344 24.003906 19.984375 24.28125 19.5 C 24.558594 19.015625 24.390625 18.402344 23.90625 18.125 L 21.6875 16.84375 L 23.40625 16.375 C 23.949219 16.253906 24.292969 15.714844 24.171875 15.171875 C 24.050781 14.628906 23.511719 14.285156 22.96875 14.40625 C 22.949219 14.414063 22.925781 14.425781 22.90625 14.4375 L 19.78125 15.28125 L 19.15625 13 L 19.75 10.71875 L 22.90625 11.5625 C 23.441406 11.699219 23.988281 11.378906 24.125 10.84375 C 24.261719 10.308594 23.941406 9.761719 23.40625 9.625 L 21.6875 9.15625 L 23.90625 7.875 C 24.363281 7.652344 24.578125 7.125 24.410156 6.644531 C 24.246094 6.167969 23.746094 5.890625 23.25 6 C 23.128906 6.019531 23.011719 6.0625 22.90625 6.125 L 20.65625 7.4375 L 21.125 5.65625 C 21.214844 5.347656 21.152344 5.011719 20.953125 4.757813 C 20.753906 4.503906 20.445313 4.363281 20.125 4.375 C 20.09375 4.375 20.0625 4.375 20.03125 4.375 C 19.613281 4.429688 19.277344 4.742188 19.1875 5.15625 L 18.34375 8.28125 L 16.125 7.6875 L 14.4375 6 L 16.71875 3.71875 C 17.117188 3.320313 17.117188 2.679688 16.71875 2.28125 C 16.320313 1.882813 15.679688 1.882813 15.28125 2.28125 L 14 3.5625 L 14 1 C 14.011719 0.710938 13.894531 0.433594 13.6875 0.238281 C 13.476563 0.0390625 13.191406 -0.0585938 12.90625 -0.03125 Z M 12 8.4375 L 12 11.28125 L 9.53125 9.84375 L 10.6875 9.53125 C 10.863281 9.492188 11.027344 9.40625 11.15625 9.28125 Z M 14 8.4375 L 14.84375 9.28125 C 14.972656 9.40625 15.136719 9.492188 15.3125 9.53125 L 16.46875 9.84375 L 14 11.28125 Z M 8.53125 11.59375 L 10.96875 13 L 8.53125 14.40625 L 8.84375 13.25 C 8.886719 13.085938 8.886719 12.914063 8.84375 12.75 Z M 17.46875 11.59375 L 17.15625 12.75 C 17.113281 12.914063 17.113281 13.085938 17.15625 13.25 L 17.46875 14.40625 L 15.03125 13 Z M 12 14.71875 L 12 17.5625 L 11.15625 16.71875 C 11.027344 16.59375 10.863281 16.507813 10.6875 16.46875 L 9.53125 16.15625 Z M 14 14.71875 L 16.46875 16.15625 L 15.3125 16.46875 C 15.136719 16.507813 14.972656 16.59375 14.84375 16.71875 L 14 17.5625 Z"></path>
        </svg>
      </div>
      <div className="border-[1.5px] border-[#303030] p-5 text-center flex max-w-full md:w-full lg:w-[50%] xl:w-[40%] gap-2 justify-center rounded-t-xl rounded-b-sm text-[22px]">
        <div
          id="mil-box"
          className=" bg-[#262626] p-[2px] mil-box border-t-white  rounded-md flex flex-col h-[55px] overflow-hidden gap-1"
        >
          <div className=" border-[1px] shadow-lg  zero flex justify-center shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            0
          </div>
          <div className="border-[1px] shadow-lg flex justify-center shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            1
          </div>
          <div className="border-[1px] shadow-lg flex justify-center two shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
            2
          </div>
          <div className="border-[1px] shadow-lg  three shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
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
          <div className=" border-[1px] shadow-lg  zero flex justify-center shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
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
          <div className=" border-[1px] shadow-lg  zero flex justify-center shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
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
          <div className=" border-[1px] shadow-lg  zero flex justify-center shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
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
          <div className=" border-[1px] shadow-lg  zero flex justify-center shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
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
          <div className=" border-[1px] shadow-lg  zero flex justify-center shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
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
          <div className=" border-[1px] shadow-lg flex justify-center zero  shadow-[#262626] border-[#5a5959] rounded-md py-2 px-3 bg-[#262626]">
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
        className="bg-[#3b3b3b] relative w-[100%] lg:w-[50%] xl:w-[40%] mt-1 p-2 text-[22px] rounded-t-sm rounded-b-xl"
        onClick={onSubmit}
      >
        +1
      </button>
    </div>
  );
};

export default Clicker;
