import React, { useState } from "react";

export const InputForm = () => {
  const [text, setText] = useState("");
  const [dropdown, setDropdown] = useState("Apple");
  const [chkBox, setChkBox] = useState(false);
  const [radioBttn, setRadioBttn] = useState("HONDA");

  return (
    <div className="input-wrap">
      <div>
        <div
          style={{ marginTop: "5px", textAlign: "center", fontWeight: "bold" }}
        >
          Input Forms
        </div>
        <div>Drop Down value is : {dropdown}</div>
        <div>Checkbox value is : {chkBox ? "True" : "False"}</div>
        <div>Radio button is : {radioBttn}</div>
        <div>You typed: {text}</div>
        <hr />
        <div>
          <label>Input: </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <label>Dropdown: </label>
          <select
            value={dropdown}
            onChange={(e) => setDropdown(e.target.value)}
          >
            <option value="Apple">Apple</option>
            <option value="Peach">Peach</option>
            <option value="Banana">Banana</option>
          </select>
        </div>
        <div>
          <label>Checkbox: </label>
          <input
            type="checkbox"
            checked={chkBox}
            onChange={(e) => setChkBox(e.target.checked)}
          />
        </div>
        <div>
          <span>Radio: </span>
          <label>
            <input
              type="radio"
              checked={radioBttn === "BMW"}
              value="BMW"
              onChange={(e) => {
                setRadioBttn(e.target.value);
              }}
            />
            BMW
          </label>
          <label>
            <input
              type="radio"
              checked={radioBttn === "HONDA"}
              value="HONDA"
              onChange={(e) => setRadioBttn(e.target.value)}
            />
            HONDA
          </label>
          <label>
            <input
              type="radio"
              checked={radioBttn === "KIA"}
              value="KIA"
              onChange={(e) => setRadioBttn(e.target.value)}
            />
            KIA
          </label>
          <label>
            <input
              type="radio"
              checked={radioBttn === "HYUNDAI"}
              value="HYUNDAI"
              onChange={(e) => setRadioBttn(e.target.value)}
            />
            HYUNDAI
          </label>
        </div>
      </div>
    </div>
  );
};
