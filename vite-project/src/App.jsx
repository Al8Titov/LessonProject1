// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';
// // Императивный стиль отсуствует
// function App() {
//   const [count, setCount] = useState(0);// Декларативный

//   const currentYear = new Date().getFullYear();// Декларативный

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       {/* Отображаем текущий год */}
//       <p className="current-year">{currentYear}</p>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);// Декларативный стиль

 
  const currentYear = new Date().getFullYear();// Декларативный стиль

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      null,
      React.createElement(
        "a",
        {
          href: "https://vite.dev",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        React.createElement("img", {
          src: viteLogo,
          className: "logo",
          alt: "Vite logo",
        })
      ),
      React.createElement(
        "a",
        {
          href: "https://react.dev",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        React.createElement("img", {
          src: reactLogo,
          className: "logo react",
          alt: "React logo",
        })
      )
    ),
    React.createElement("h1", null, "Vite + React"),
    React.createElement(
      "div",
      { className: "card" },
      React.createElement(
        "button",
        { onClick: () => setCount((count) => count + 1) },// Императивный стиль
        `count is ${count}`
      ),
      React.createElement(
        "p",
        null,
        "Edit ",
        React.createElement("code", null, "src/App.jsx"),
        " and save to test HMR"
      )
    ),
    React.createElement(
      "p",
      { className: "read-the-docs" },
      "Click on the Vite and React logos to learn more"
    ),
    React.createElement("p", { className: "current-year" }, currentYear)
  );
}

export default App;
