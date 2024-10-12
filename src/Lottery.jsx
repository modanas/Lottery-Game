import { useState } from "react"
import { genRandomNum} from "./helper"
import Ticket from "./Ticket"

export default function Lottery({n = 3, winCondition}) {
  
  let [ticket,setTicket] = useState(genRandomNum(n)) 
  let isWinning = winCondition(ticket);
 
  let buyTicket = () => {
    setTicket(genRandomNum(n)) //Generating n random numbers
  }

  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket}/>
      <br />
      <button onClick={buyTicket}>Buy New Ticket</button>
      <h3>{isWinning  && "Congratulation you Won!"}</h3>
    </div>
  )
}
