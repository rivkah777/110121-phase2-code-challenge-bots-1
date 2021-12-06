import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({armyBot,onClick,forever}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {armyBot.map((bot) =>(
            <BotCard 
            key={bot.id}
            bot={bot}
            onClick={onClick}
            forever={forever}
            />
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
