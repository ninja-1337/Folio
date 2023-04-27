/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useTheme as useNextTheme } from 'next-themes'

function GameOfLifePage (){
  // Initialize the game state with a random grid of cells
  const count = useRef(0);
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < 35; i++) {
      rows.push(Array.from(Array(100), () => (Math.random() > 0.5 ? 1 : 0)));
    }
    return rows;
  });
  const {setTheme,theme}   = useNextTheme();



  // This effect will be called on every update to the component
  useEffect(() => {
    if (count.current < 155) {
      count.current = count.current + 1;
      // Calculate the next generation of cells
      async function fetchData() {
        const nextGeneration = grid.map((row, y) =>
          row.map(
            (cell, x) => {
              const neighbors = [
                grid[y - 1]?.[x - 1],
                grid[y - 1]?.[x],
                grid[y - 1]?.[x + 1],
                grid[y]?.[x - 1],
                grid[y]?.[x + 1],
                grid[y + 1]?.[x - 1],
                grid[y + 1]?.[x],
                grid[y + 1]?.[x + 1],
              ].filter(Boolean);
              const liveNeighbors = neighbors.filter((c) => c === 1).length;

              if (cell === 1 && (liveNeighbors === 2 || liveNeighbors === 3)) {
                return 1;
              } else if (cell === 0 && liveNeighbors === 3) {
                return 1;
              } else {
                return 0;
              }
            },
            [grid]
          )
        );
        setGrid(nextGeneration);
      }
      fetchData();
      // Update the grid with the next generation of cells
    }
  }, [grid]);
const color={
  black:"#161716",
  white:"white"
}
if(theme=="dark"){
  color.black="white"
  color.white="#161716"
}else{
  color.black="#161716"
  color.white="white"
}
  // Render the grid as a table
  return (
    <>
      <p className="text-center text-lg text-blue-700">
        150 iterations of Conway&apos;s Game of Life. It is a <a target="_blank" rel="noreferrer" className="bold text-blue-500" href="https://en.wikipedia.org/wiki/Cellular_automaton">cellular automaton </a>
        invented by mathematician John Horton Conway in 1970. It is a
        zero-player game, meaning that its evolution is determined by its
        initial state, requiring no further input. One interacts with the Game
        of Life by creating an initial configuration and observing how it
        evolves.
      </p>

      <table className="place-content-center">
        <tbody>
          {grid.map((row) => (
            <tr>
              {row.map((cell) => (
                <td
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: cell ? color.black : color.white,
                  }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="content-center">
        <p className="text-center text-lg text-blue-500">
          This Page was created with the help of ChatGPT
        </p>
      </div>
    </>
  );
}

export default GameOfLifePage;
