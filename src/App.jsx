import { useState } from "react";
import { useEffect } from "react";
import cities from "./cities";
import Input from "./InputMask";
const tip={direction:'rtl',margin:'auto',width:'fit-content',padding:'12px',backgroundColor:'#125ccc',borderRadius:'7px',marginTop:'50px',color:'white'}
function App() {
const [hint,updateHint]=useState("");
const [input,updateInput]=useState("");

useEffect(() => {
   if(!input){
      updateHint("")
   }
}, [input])

function handleTabKey(e){
   if(e.keyCode==9){
      updateInput(hint)
  }
 }
function handleChange(e){
   const value=e.target.value;
  const city=cities.filter(city=>{
      return city.toLowerCase().slice(0,value.length).includes(value.toLowerCase())
   })
   
   updateInput(value);
   if(value.length>1)
   updateHint(city[0])

}
   return <div>
      <h2 style={tip}>با فشردن دکمه Tab کلمه کامل خواهد شد</h2>
      <Input handleChange={handleChange} handleTabKey={handleTabKey} hint={hint} input={input}/>
   </div>
}

export default App;
