/*

ref : https://stackoverflow.com/questions/17628456/measure-distance-between-two-html-elements-centers

*/
import React, { useEffect, useState } from "react";

const data = ["a", "b", "c"];
const SquareBox = () => {
  const [xVAl, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  const [result, setResult] = useState("");

  const getCoordinate = (e: any) => {
    setXVal(e.clientX);
    setYVal(e.clientY);
  };

  const elements = document.querySelectorAll(".ele");
  let min = Infinity;
  let minIdx: any;

  for (let i = 0; i < elements.length; i++) {
    const coord = elements[i].getBoundingClientRect();

    const diffX = xVAl - (coord.x + coord.width / 2);
    const diffY = yVal - (coord.y + coord.height / 2);

    const diff = Math.sqrt(diffX ** 2 + diffY ** 2);

    if (diff < min) {
      min = diff;
      minIdx = i;
    }
  }

  useEffect(() => {
    setResult(data[minIdx]);
  }, [minIdx]);

  return (
    <div className="square-wrap">
      <div id="gray-box" onClick={getCoordinate} className="ele-container">
        {data.map((val, idx) => (
          <div key={val + idx} className="ele" id={`ele-${val}`}>
            {val}
          </div>
        ))}
      </div>
      <div className="answer">The closest element is {result}</div>
    </div>
  );
};

export default SquareBox;
