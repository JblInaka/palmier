import * as React from 'react';

const Dropdown = () => {

 return (

   <div >
      <select className=' rounded-3xl text-white font-semibold bg-amber-500 px-3 py-3 '>
        <option value="fruit" >Tous les projets</option>
        <option value="vegetable">Bénin</option>
        <option value="meat">RD Congo</option>
      </select>
   </div>

 );

};

export default Dropdown;