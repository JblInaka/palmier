import * as React from "react";
import { useState } from "react";

const Dropdown = ({ onSelectChange }: any) => {
  const [selectedValue, setSelectedValue] = useState("tous");

  // function getSelectedValue = () => {
  //   console.log(selectedValue);
  // }

  return (
    <div>
      <select
        value={selectedValue}
        onChange={(e) => {
          console.log("Selected value ", e.target.value);
          onSelectChange(e.target.value);
          setSelectedValue(e.target.value);
        }}
        className=" rounded-3xl text-white font-semibold bg-amber-500 px-3 py-3 "
      >
        <option value="tous">Tous les projets</option>
        <option value="benin">Bénin</option>
        <option value="suisse">Suisse</option>
        <option value="congo">RD Congo</option>
      </select>
    </div>
  );
};

export default Dropdown;
