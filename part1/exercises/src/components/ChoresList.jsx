import classes from './ChoresList.module.css';
import React from 'react';

export default function ChoresList () {
   return (
   <div>
      <p className="choresHeading">Today's Chores</p>
      <li className="choresText">Make Bed</li>
      <li className="choresText">Clean Dishes</li>
      <li className="choresText">Fold Laundry</li>
   
   </div>
   );

}