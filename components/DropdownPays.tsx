"use client";

import * as React from "react";
import { useState } from "react";

const Dropdown = ({ onSelectChange }: any) => {
  const [selectedValue, setSelectedValue] = useState("tous");

  // function getSelectedValue = () => {
  //   console.log(selectedValue);
  // }

  return (
    <div className="mt-10  mx-24">
      <select
        value={selectedValue}
        onChange={(e) => {
          onSelectChange(e.target.value);
          setSelectedValue(e.target.value);
        }}
        className=" rounded-3xl text-white font-semibold bg-amber-500 px-3 py-3 "
      >
        <option value="tous">Recherche par pays</option>
        <option value="benin">Bénin</option>
        <option value="suisse">Suisse</option>
        <option value="congo">RD Congo</option>
      </select>
    </div>
  );
};

export default Dropdown;
