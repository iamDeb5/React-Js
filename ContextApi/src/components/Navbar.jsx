import React, { useState } from "react";
import Nav2 from "./Nav2";

const Navbar = (props) => {
  const [inp, setInp] = useState("");
  return (
    <div className="nav">
      <h2>{props.brand}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          props.changeBrand(inp);

          setInp("");
        }}
      >
        <input
          type="text"
          placeholder="Enter brand..."
          value={inp}
          onChange={(e) => {
            setInp(e.target.value);
          }}
        />
        <button>submit</button>
      </form>
      <Nav2 />
    </div>
  );
};

export default Navbar;
