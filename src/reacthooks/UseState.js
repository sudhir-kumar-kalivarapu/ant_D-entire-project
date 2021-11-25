import { useState } from "react";

function FavoriteColor() {
    const [color,setColor] = useState("red");

   return(
       <div>
           <h1>my fav color is {color}!</h1>
              <button
              type = "button"
              onClick={()=> setColor("blue")}
              >blue
              </button>

              <button
              type = "button"
              onClick={()=> setColor("black")}
              >black
              </button>

              <button
              type = "button"
              onClick={()=> setColor("yellow")}
              >yellow
              </button>

              <button
              type = "button"
              onClick={()=> setColor("green")}
              >green
              </button>    
       </div>
   )
};
export default FavoriteColor;