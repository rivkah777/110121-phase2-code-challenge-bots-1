import React,{useEffect,useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";


function BotsPage() {
  const[bots,setBots] = useState([])
 const [armyBot,setArmyBot] = useState([])
 
 
   useEffect(()=>{
     fetch(" http://localhost:8002/bots")
     .then((res) => res.json())
     .then((setBots))
   },[])
   
   
   
   function armyB(bot){
    const inArmy = armyBot.find((b) => b === bot)
   if(!inArmy){
     setArmyBot([...armyBot,bot])
   }
  } 


   function removeArmy(bot){
   setArmyBot(armyBot.filter((b) => (b.id !== bot.id))) // filters all the elements and returns the element that matches .
     
  }   
   
  function forever(bot){
   setArmyBot(armyBot.filter((b) => (b.id !== bot))) //filters all the elements and returns the element that matches 
   setBots(bots.filter((b) => (b.id !== bot ))) //filters all the elements and returns the element that matches 
  
  fetch(` http://localhost:8002/bots/${bot}`,{
    method: "Delete",

  })
  
 }
   
 
 return (
     <div>
       <YourBotArmy forever={forever} armyBot={armyBot} onClick={removeArmy}/>
       <BotCollection forever={forever} bots={bots} onClick={armyB}  /> 
     </div>
   )
 }
 
export default BotsPage;
