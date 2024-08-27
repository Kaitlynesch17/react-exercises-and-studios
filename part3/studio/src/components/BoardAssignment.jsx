import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         label: "easyCookieLabel",
         value: "easyCookies"
      }, 
      
      {
         label: "hardCookieLabel",
         value: "hardCookies"
      },

      {
         label: "mediumCookieLabel",
         value: "mediumCookies"
      }
         ];


   const [boardName, setName] = useState('no boards yet!');

   const handleChange = (event) => {
      setName(event.target.value);

   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select  value={boardName} onChange={handleChange}>
         {boards.map((aBoard) => { 
            return(
               <option key={aBoard.label} value={`${aBoard.value}`} > {`${aBoard.label}`}</option>
            )}) }
     

      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
