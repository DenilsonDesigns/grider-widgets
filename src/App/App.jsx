import React from "react";
import "./App.css";
import { Accordion } from "../Components/Accordion/Accordion";
import { Search } from "../Components/Search/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a front-end JS framework",
  },
  {
    title: "Why use React?",
    content: "It's oarsome",
  },
  {
    title: "How do you use React?",
    content: "By creating components etc.",
  },
];

function App() {
  return (
    <div className="App">
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
}

export default App;
