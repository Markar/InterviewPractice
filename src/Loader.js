import React, { useState, createContext } from "react";
import "./Loader.css";

import {
  AddCommas,
  PhoneData,
  PhoneNumber,
  PrefixSum,
  LetterPhoneNumber,
} from "./Questions/Fundamentals";
import { SortedArrays, NGram, TwoSum, Sudoku } from "./Questions/DsAlgo";
import { EmployeeChart } from "./Questions/NextDoor/Recusive";
import {
  DataFetch,
  HtmlTable,
  TicTacToe,
  BlogPost,
  Refs,
  ToDo,
  Counter,
  Newspaper,
  ParkingGarage,
} from "./React";
import { TrainerBelt } from "./React/TrainerBelt/TrainerBelt";

export const PostContext = createContext();

export function Loader() {
  const [tab, setTab] = useState(0);
  const [component, setComponent] = useState(null);

  const navSections = ["React", "DS Algo", "Fundamentals"];
  const post = { title: "My Blog Post!" };

  const DsAlgo = ["SortedArrays", "NGram", "TwoSum", "Sudoku"];

  const Fundamentals = [
    "AddCommas",
    "BindApply",
    "EmployeeChart",
    "LetterPhoneNumber",
    "PhoneNumber",
    "PrefixSum",
  ];

  const ReactComponents = [
    "TrainerBelt",
    "ContextAPI",
    "Counter",
    "HtmlTable",
    "Refs",
    "TicTacToe",
    "ToDo",
    "Newspaper",
    "DataFetch",
    "ParkingGarage",
  ];

  function handleComponentChange(comp) {
    setComponent(comp);
  }

  function Blog() {
    return <BlogPost />;
  }

  function handleTabChange(number) {
    console.log("clicked", number);
    setTab(number);
  }

  return (
    <>
      <div className="tab-nav">
        {navSections.map((section, index) => {
          return (
            <div
              key={index}
              className="tab"
              onClick={() => handleTabChange(index)}
            >
              {section}
            </div>
          );
        })}
      </div>

      <div>
        {tab === 0 && (
          <div>
            <h3 className="nav-header">React</h3>
            {ReactComponents.map((comp) => {
              return (
                <button
                  className="button"
                  key={comp}
                  onClick={() => handleComponentChange(comp)}
                >
                  {comp}
                </button>
              );
            })}
          </div>
        )}

        {tab === 1 && (
          <div>
            <h3 className="nav-header">DsAlgo</h3>
            {DsAlgo.map((comp) => {
              return (
                <button key={comp} onClick={() => handleComponentChange(comp)}>
                  {comp}
                </button>
              );
            })}
          </div>
        )}

        {tab === 2 && (
          <div>
            <h3 className="nav-header">Fundamentals</h3>
            {Fundamentals.map((comp) => {
              return (
                <button key={comp} onClick={() => handleComponentChange(comp)}>
                  {comp}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div>
        {component === "ParkingGarage" ? <ParkingGarage /> : null}
        {component === "TrainerBelt" ? <TrainerBelt /> : null}
        {component === "PhoneNumber" ? <PhoneNumber data={PhoneData} /> : null}
        {component === "AddCommas" ? <AddCommas /> : null}
        {component === "HtmlTable" ? <HtmlTable /> : null}
        {component === "SortedArrays" ? <SortedArrays /> : null}
        {component === "NGram" ? <NGram /> : null}
        {component === "PrefixSum" ? <PrefixSum /> : null}
        {component === "LetterPhoneNumber" ? <LetterPhoneNumber /> : null}
        {component === "EmployeeChart" ? <EmployeeChart /> : null}
        {component === "TicTacToe" ? <TicTacToe /> : null}
        {component === "ToDo" ? <ToDo /> : null}
        {component === "TwoSum" ? <TwoSum /> : null}
        {component === "Counter" ? <Counter /> : null}
        {component === "Refs" ? <Refs /> : null}
        {component === "Newspaper" ? <Newspaper /> : null}
        {component === "ContextAPI" ? (
          <PostContext.Provider value={post}>
            <Blog />
          </PostContext.Provider>
        ) : null}
        {component === "Sudoku" ? <Sudoku /> : null}
        {component === "DataFetch" ? <DataFetch /> : null}
      </div>
    </>
  );
}
