import React, { useState } from "react";
import "./styles.css";
const listOfFruits = [
  "Apples",
  "Mango",
  "Banana",
  "Pineapple",
  "Appricot",
  "Guava",
  "Strawberry",
  "Oranges",
  "Grapes",
  "Pomogranate",
  "Kiwi",
  "Watermelon",
  "Woodapple",
  "Custardapple",
  "Durian",
  "Blueberry",
  "Avocado",
  "Gooseberry",
  "Blueberry",
  "Blackberry",
  "Muskmelon"
];

export default function App() {
  const [fruits, setFruits] = useState([]);
  function searchFunction(value) {
    const result = listOfFruits.filter((items) => {
      return items.toLowerCase().includes(value.toLowerCase());
    });
    setFruits(result);
  }
  return (
    <>
      <input
        type="text"
        placeholder="Enter Search Terms"
        onChange={(e) => {
          searchFunction(e.target.value);
        }}
      ></input>
      <ul>
        {fruits.map((item) => {
          return <li keys={item}>{item}</li>;
        })}
      </ul>
    </>
  );
}
